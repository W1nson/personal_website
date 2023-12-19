

import { Button } from '@/app/ui/button';
import { loginUser } from '@/app/backend/api'; 
import { useFormState } from 'react-dom';


const fields = [
    { name: 'Username', id: 'userName', type: 'string', onChange: ''},  
    { name: 'Password', id: 'password', type: 'password', minlen: 8, onChange: ''}, 
]

export default function LoginForm() {

    const initialState = { message: null, errors: {} };
	const [state, action] = useFormState(loginUser, initialState);
    
    return (
        <div className='flex justify-center p-16 text-black'>
            <form action={action} className='flex flex-col items-center w-[50vw] h-[70vh] bg-sky-100 rounded-lg '>
        
                <h1 key='logintitle'>Login</h1>
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
                <Button key="loginbtn" className='w-[7vw] text-center'>Login</Button>
            </form>
        </div>
    )
}