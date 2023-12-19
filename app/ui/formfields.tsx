




const fields = [
    { name: 'First Name', id: 'firstName', type: 'string', onChange: ''}, 
    { name: 'Last Name', id: 'lastName', type: 'string', onChange: ''}, 
    { name: 'Username', id: 'userName', type: 'string', onChange: ''},
    { name: 'Email', id: 'email', type: 'string', onChange: ''},
    { name: 'Phone', id: 'phone', type: 'string', onChange: ''},
    { name: 'Password', id: 'password', type: 'password', minlen: 8, onChange: ''}, 
    { name: 'Confirm Password', id: 'confirmPassword', type: 'password', minlen: 8, onChange: ''}
]

export default function FormFields() {
    return(
        <>
        {fields.map((field) => {
            // console.log(field)
            return(
            <>
                <span key={'span-' + field.id}>{field.name}</span>
                <input className="w-[20vw] rounded-sm"
                    id={field.id} 
                    key={field.name}
                    name={field.name} 
                    type={field.type}
                    minLength={field.minlen}
                    required 
                    // onChange={field.onChange}
                    placeholder={"Enter your " + field.name}  
                />
           </>
           );
        })}
        </>
    );
}