


import FormFields from "@/app/ui/formfields";
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { signup } from '@/app/backend/api'; 


export default function SignUpForm() {

    const initialState = { firstname: '', lastname: '', email: '', password: '', confirmPassword: ''};
	
	const [state, action] = useFormState(signup, initialState);
    
    return (
        <div className='flex justify-center p-16 text-black'>
            <form action={action} className='flex flex-col items-center w-[50vw] h-[70vh] bg-sky-100 rounded-lg '>
        
                <h1>Sign Up</h1>
                <FormFields/>
                <Button className='w-[7vw] text-center items-center'>Sign Up</Button>
            </form>
        </div>
    )
}