'use server'; 

import { z } from 'zod'; 
import { sql } from '@vercel/postgres'; 
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const bcrypt = require('bcrypt'); 
const crypto = require('crypto'); 

export type State = { 
	errors?: {	
		firstName?: string[]; 
		lastName?: string[]; 
		userName?: string[]; 
		email?: string[]; 
		phone?: string[]; 
		password?: string[]; 
		confirmPassword?: string[]; 
	}; 
	message?: string | null;
}

const studentSchema = z.object({
	id: z.string(), 
    firstName: z.string(),
    lastName: z.string(),
    userName: z.string(),
    email: z.string().email(),
    phone: z.string().transform(data => Number(data)),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
	date: z.string()
})

const CreateUser = studentSchema.omit({ id: true, date: true });
const LoginUser = studentSchema.omit({id: true, date: true, firstName: true, lastName: true, phone: true, confirmPassword: true, email: true})

export async function createUser(prevState: State, formData: FormData) { 
	
	const validatedFields = CreateUser.safeParse({
		firstName: formData.get('firstName'),
		lastName: formData.get('lastName'),
		userName: formData.get('userName'),
		email: formData.get('email'), 
		phone: formData.get('phone'), 
		password: formData.get('password'),
		confirmPassword: formData.get('confirmPassword')
	});

	if (!validatedFields.success) {
		return {
		  errors: validatedFields.error.flatten().fieldErrors,
		  message: 'Missing Fields. Failed to Create User.',
		};
	}
	const { firstName, lastName, userName, email, phone, password, confirmPassword } = validatedFields.data;
	const uuid = await crypto.randomUUID(); 
	const hashedPassword = await bcrypt.hash(password, 10);
	const date = new Date().toISOString().split('T')[0];
	
	// console.log(date);
	try {
		await sql`
		INSERT INTO students (id, username, firstname, lastname, email, phone, password, date)
		VALUES (${uuid}, ${userName}, ${firstName}, ${lastName}, ${email}, ${phone}, ${hashedPassword}, ${date})
		ON CONFLICT (id) DO NOTHING;`;

		console.log(`finished insert ${firstName} ${lastName}`);

	} catch (error) { 
		return {
			message: 'Database Error: Failed to Create student.' 
		}
	}
	revalidatePath('/signup');
	redirect('/signup')
}


export async function loginUser(prevState: State, formData: FormData) {

	const validatedFields = LoginUser.safeParse({
		userName: formData.get('userName'),
		password: formData.get('password'),
	});

	if (!validatedFields.success) {
		return {
		  errors: validatedFields.error.flatten().fieldErrors,
		  message: 'Missing Fields. Failed to Login.',
		};
	}
	const { userName, password } = validatedFields.data;

	console.log(userName, password);
	try {
		const row = await sql`
			SELECT *
			FROM students 
			WHERE email = ${userName} OR username = ${userName};`;
		
		// console.log(row);
		const user = row.rows[0];
		console.log(user.username);
		const passwordsMatch = await bcrypt.compare(password, user.password); 
		console.log(passwordsMatch);
	}
	catch(error) {
		console.error('Error checking password');
		throw error; 
	}
	

}
