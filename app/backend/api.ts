'use server'; 

import { z } from 'zod'; 
import { sql } from '@vercel/postgres'; 



export async function createUser() { 

	try {
		await sql`
		INSERT INTO invoices (customer_id, amount, status, date)
		VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;
	} catch (error) { 
		return {
			message: 'Database Error: Failed to Create Invoice.' 
		}
	}
}




