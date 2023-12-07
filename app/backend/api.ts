'use server'; 

import { z } from 'zod'; 
import { sql } from '@vercel/postgres'; 
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const bcrypt = require('bcrypt'); 
const crypto = require('crypto'); 

export async function signup(
	prevState: string | undefined,
	formData: FormData
	) {
	// console.log(prevState);
	// processing data 
	const user = Object.fromEntries(formData); 
	return createUser(user);
	
}



export async function createUser(user) { 

	try {
		// console.log(user);
		const uuid = await crypto.randomUUID(); 
		const hashedPassword = await bcrypt.hash(user.password, 10);
		await sql`
		INSERT INTO students (id, firstname, lastname, email, password)
		VALUES (${uuid}, ${user.firstname}, ${user.lastname}, ${user.email}, ${hashedPassword})
		ON CONFLICT (id) DO NOTHING;`;

		console.log(`finished insert ${user.firstname} ${user.lastnaem}`);

	} catch (error) { 
		return {
			message: 'Database Error: Failed to Create student.' 
		}
	}
	revalidatePath('/signup');
	redirect('/signup')
}




