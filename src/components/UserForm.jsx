import React, { useState } from  'react';
    
const formStyle={
    width: '50%',
    padding: '20px',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}
const errorStyle={
    color: 'red'
}
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password };
        console.log("Welcome", newUser);
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    };
    return(
    <div style={{width: '70%', margin: '0 auto'}}>
        <form style={formStyle} onSubmit={ createUser }>
            <label>First Name: </label>
            <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={firstName}/>
            {firstName.length> 0 && firstName.length < 2 && <p style={errorStyle}>First name must be at least 2 Characters</p>}
            <label>Last Name: </label> 
            <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName}/>
            {lastName.length> 0 && lastName.length < 2 && <p style={errorStyle}>Last name must be at least 2 Characters</p>}
            <label>Email Address: </label> 
            <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
            {email.length > 0 && email.length < 5 && <p style={errorStyle}>email must be at least 5 Characters</p>}
            <label>Password: </label>
            <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password}/>
            {password.length > 0 && password.length < 8 && <p style={errorStyle}>Password must be at least 8 Characters</p>}
            <label>Confirm Password: </label>
            <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={confirmPassword}/>
            {confirmPassword.length > 0 && confirmPassword.length < 8 && <p style={errorStyle}>Confirm Password must be at least 8 Characters</p>}
            {confirmPassword.length > 0 && password !== confirmPassword && <p style={errorStyle}>Password must match </p>}            
            <input type="submit" value="Create User" />
        </form>
<h2>Your Form Data</h2>
<div>
<p>First Name: {firstName}</p>
<p>Last Name: {lastName}</p>
<p>Email: {email}</p>
<p>Password: {password}</p>
<p>Confirm Password: {confirmPassword}</p>
</div>
    </div>

    );
};
    
export default UserForm;
