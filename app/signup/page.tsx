'use client'
// form 
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { signup } from '@/app/backend/api'; 
import SignUpForm from '@/app//ui/signupform';


export default function Page(){
	// const initialState = { firstname: '', lastname: '', email: '', password: '', confirmPassword: ''};
	
	// const [state, action] = useFormState(signup, initialState);
	// // console.log(state.email)
	// // const signup = () => {

	// // }
	return(
		<SignUpForm/>

	);
}

