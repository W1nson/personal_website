
// form 
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';


export default function Page(){
	// const initialState = { message: null, errors: {} };
	// const [state, dispatch] = useFormState(, initialState);
	return(
		<div className='flex justify-center p-16 text-black'>
			<form className='flex flex-col items-center w-[50vw] h-[70vh] bg-sky-100 rounded-lg '>
		
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

		</div>

	);
}

