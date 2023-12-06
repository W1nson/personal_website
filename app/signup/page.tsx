'use client'
// form 
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { signup } from '@/app/backend/api'; 

// export async function createUser(	
// 	prevState: string | undefined,
// 	formData: FormData) { 

// 	try {
// 		await sql`
// 		INSERT INTO invoices (customer_id, amount, status, date)
// 		VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;
// 	} catch (error) { 
// 		return {
// 			message: 'Database Error: Failed to Create Invoice.' 
// 		}
// 	}
// }



export default function Page(){
	const initialState = { firstname: null, lastname: null, email: null, password: null};
	const [state, action] = useFormState(signup, initialState);
	// console.log(state.email)
	// const signup = () => {

	// }
	return(
		<div className='flex justify-center p-16 text-black'>
			<form action={action} className='flex flex-col items-center w-[50vw] h-[70vh] bg-sky-100 rounded-lg '>
		
				<h1>Sign Up</h1>
				<span>First Name</span>
				<input className="w-[20vw] rounded-sm" 
					id="firstname"
					name="firstname"
					type="string"
					required
					placeholder="Enter your First Name"/>
				<span>Last Name</span>
				<input className="w-[20vw] rounded-sm" 
					id="lastname"
					name="lastname"
					type="string"
					required
					placeholder="Enter your Last Name"/>
				<span>Email</span>
				<input className="w-[20vw] rounded-sm" 
					id="email"
					name="email"
					type="string"
					required
					placeholder="Enter your Email"/>
				<span>Password</span>
				<input className="w-[20vw] rounded-sm" 
					id="password"
					name="password"
					type="password"
					required
					minLength={8}
					placeholder="Enter Password"/>
				<span>Confirm Password</span>
				<input className="w-[20vw] rounded-sm" 
					id="password"
					name="password"
					type="password"
					required
					minLength={8}
					placeholder="Enter Password"/>

				<Button className='w-[7vw] text-center items-center'>Sign Up</Button>
			</form>
				{/* {state} */}
		</div>

	);
}

