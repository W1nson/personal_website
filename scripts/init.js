const { db } = require('@vercel/postgres');
const { students } = require('../app/backend/test.js');
const bcrypt = require('bcrypt'); 
const crypto = require('crypto');

const saltRounds = 10; 

async function initialTable(client) {
	try { 
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`; 

		const createTable = await client.sql`
			CREATE TABLE IF NOT EXISTS students (
				id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
				firstname VARCHAR(255) NOT NULL, 
				lastname VARCHAR(255) NOT NULL,
				username VARCHAR(255) NOT NULL, 
				phone VARCHAR(255) NOT NULL,  
				email TEXT NOT NULL UNIQUE, 
				password TEXT NOT NULL, 
				date DATE NOT NULL
			);
		`;

		console.log(`Created "students" table`);
		const date = new Date().toISOString().split('T')[0];

	    // console.log(students)
		// insert data into students table 
		const insertedStudents = await Promise.all( 
			students.map(async (student) => {
				const uuid = await crypto.randomUUID(); 
				const hashedPassword = await bcrypt.hash(student.password, saltRounds);
				return client.sql`
				INSERT INTO students (id, firstname, lastname, username, phone, email, password, date)
				VALUES (${uuid}, ${student.firstname}, ${student.lastname}, ${student.username},${student.phone},${student.email}, ${hashedPassword}, ${date})
				ON CONFLICT (id) DO NOTHING;`;
			}),
		);
		console.log(`Seeded ${insertedStudents.length} users`);

	    return{
			createTable, 
			students: insertedStudents,
		};
	}
	catch(error) {
		console.error('Error seeding users:', error); 
		throw error; 
	}
};

async function checkPassword(client, email, password) {
	try {

		const row = await client.sql`
			SELECT *
			FROM students 
			WHERE email = ${email};`;

		const user = row.rows[0];
		const passwordsMatch = await bcrypt.compare(password, user.password); 
		console.log(passwordsMatch);
	}
	catch(error) {
		console.error('Error checking password');
		throw error; 
	}
	

}

async function clearTable(client) {

	try{
		const deleteTable = await client.sql`
			DROP TABLE students;
		`;
		console.log('deleting users');
		return {
			deleteTable, 
		};
	
	}
	catch(error) {
		console.error('Error deleting users:', error); 
		throw error; 
	}
};

async function main() {
	console.log(students); 
	const client = await db.connect(); 
	await initialTable(client); 
	// await checkPassword(client, "winsonchen108@gmail.com", '19991229Wn')
	// await clearTable(client);

}

main().catch((err) => {
	console.error(
	  'An error occurred while attempting to initializing the database:',
	  err,
	);
});
