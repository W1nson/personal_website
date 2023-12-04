const { db } = require('@vercel/postgres');
const { students } = require('../app/backend/test.js');
const bcrypt = require('bcrypt'); 
const crypto = require('crypto');

async function initialTable(client) {
	try { 
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`; 

		const createTable = await client.sql`
			CREATE TABLE IF NOT EXISTS students (
				id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
				name VARCHAR(255) NOT NULL, 
				email TEXT NOT NULL UNIQUE, 
				password TEXT NOT NULL 
			);
		`;

		console.log(`Created "students" table`);

	    // console.log(students)
		// insert data into students table 
		const insertedStudents = await Promise.all( 
			students.map(async (student) => {
				const uuid = await crypto.randomUUID(); 
				const hashedPassword = await bcrypt.hash(student.password, 10);
				return client.sql`
				INSERT INTO students (id, name, email, password)
				VALUES (${uuid}, ${student.name}, ${student.email}, ${hashedPassword})
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

async function clearTable(client) {

	try{
		const deleteTable = await client.sql`
			DELETE FROM students;
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
	// await initialTable(client); 
	await clearTable(client); 
}

main().catch((err) => {
	console.error(
	  'An error occurred while attempting to initializing the database:',
	  err,
	);
});
