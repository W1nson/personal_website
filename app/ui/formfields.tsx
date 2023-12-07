




const fields = [
    { name: 'First Name', id: 'firstname', type: 'string', onChange: ''}, 
    { name: 'Last Name', id: 'lastname', type: 'string', onChange: ''}, 
    { name: 'Email', id: 'email', type: 'string', onChange: ''}, 
    { name: 'Password', id: 'password', type: 'password', minlen: 8, onChange: ''}, 
    { name: 'Confirm Password', id: 'confirmpassword', type: 'password', minlen: 8, onChange: ''}
]

export default function FormFields() {
    return(
        <>
        {fields.map((field) => {
            // console.log(field)
            return(
            <>
                <span>{field.name}</span>
                <input className="w-[20vw] rounded-sm"
                    id={field.id} 
                    name={field.id} 
                    type={field.type}
                    minLength={field.minlen}
                    required 
                    onChange={field.onChange}
                    placeholder={"Enter your " + field.name}  
                />
           </>
           );
        })}
        </>
    );
}