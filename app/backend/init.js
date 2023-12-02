const { db } = require('@vercel/postgres');

const bcrypt = require('bcrypt'); 


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
	    return;
	}
	catch(error) {
		console.error('Error seeding users:', error); 
		throw error; 
	}
};

async function main() { 
	const client = await db.connect(); 
	await initialTable(client); 
}

main().catch((err) => {
	console.error(
	  'An error occurred while attempting to initializing the database:',
	  err,
	);
});
