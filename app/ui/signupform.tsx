

import FormFields from "@/app/ui/formfields";
import { Button } from '@/app/ui/button';
import { createUser } from '@/app/backend/api'; 
import { useFormState } from 'react-dom';


const fields = [
    { name: 'First Name', id: 'firstName', type: 'string', onChange: ''}, 
    { name: 'Last Name', id: 'lastName', type: 'string', onChange: ''}, 
    { name: 'Username', id: 'userName', type: 'string', onChange: ''},
    { name: 'Email', id: 'email', type: 'string', onChange: ''},
    { name: 'Phone', id: 'phone', type: 'string', onChange: ''},
    { name: 'Password', id: 'password', type: 'password', minlen: 8, onChange: ''}, 
    { name: 'Confirm Password', id: 'confirmPassword', type: 'password', minlen: 8, onChange: ''}
]

export default function SignUpForm() {

    const initialState = { message: null, errors: {} };
	const [state, action] = useFormState(createUser, initialState);
    
    return (
        <div className='flex justify-center p-16 text-black'>
            <form action={action} className='flex flex-col items-center w-[50vw] h-[70vh] bg-sky-100 rounded-lg '>
        
                <h1 key='signuptitle'>Sign Up</h1>
                {fields.map((field, i) => {
                    // console.log(field)
                    return(
                    <div key={i} className="flex flex-col p-2">
                        <span key={'span-' + i}>{field.name}</span>
                        <input className="w-[20vw] rounded-sm"
                            id={field.id} 
                            key={field.id}
                            name={field.id} 
                            type={field.type}
                            minLength={field.minlen}
                            required 
                            // onChange={field.onChange}
                            placeholder={"Enter your " + field.name}  
                        />
                    </div>
                );
                })}
                <Button key="signupbtn" className='w-[7vw] text-center'> Sign Up</Button>
            </form>
        </div>
    )
}