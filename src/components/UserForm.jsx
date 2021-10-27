import React, { useState, useReducer } from  'react';
    
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
const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        },
    password: {
            value: '',
            error: null
        },
    confirmPassword: {
            value: '',
            error: null
        },

    };
    
const reducer = (state = initialState, action) => {
const {type, payload} = action;
console.log(type, " this is type")
switch(type) {
    case "firstName":
        console.log(state.firstName.value) 
        if(payload.length < 2){
            return {...state, [type]:{value: payload, error: "First Name must be at least 2 Character"}};
        }
        return {...state, [type]:{value: payload}};
    case "lastName":
        if(payload.length < 2){
            return {...state, [type]:{value: payload, error: "Last Name must be at least 2 Character"}};
        } 
        return {...state, [type]:{value: payload}};
    case "email":
        if(payload.length < 8){
            return {...state, [type]:{value: payload, error: "Email must be at least 8 Character"}};
        } 
        return {...state, [type]:{value: payload}};
    case "password":
        if(payload.length < 8){
            return {...state, [type]:{value: payload, error: "Password must be at least 8 Character"}};
        } 
        return {...state, [type]:{value: payload}};
    case "confirmPassword":
        if(payload.length < 8){
            return {...state, [type]:{value: payload, error: "Password must be at least 8 Character"}};
        }
        if(payload !== state.password.value){
            return {...state, [type]:{value: payload, error: "Password must be match"}};
        } 
        return {...state, [type]:{value: payload}};
    default:
        throw new Error();
}
}
const UserForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        })
    }
    return(
    <div style={{width: '70%', margin: '0 auto'}}>
        <form style={formStyle}>
            <label>First Name: </label>
            <input name="firstName" type="text" onChange={handleChange} value={state.firstName.value}/>
            {state.firstName.error != null && <p style={errorStyle}>{state.firstName.error}</p>}
            <label>Last Name: </label> 
            <input name="lastName" type="text" onChange={handleChange} value={state.lastName.value}/>
            {state.lastName.error != null && <p style={errorStyle}>{state.lastName.error}</p>}
            <label>Email Address: </label> 
            <input name="email" type="text" onChange={handleChange} value={state.email.value}/>
            {state.email.error != null && <p style={errorStyle}>{state.email.error}</p>}
            <label>Password: </label>
            <input name="password" type="password" onChange={handleChange} value={state.password.value}/>
            {state.password.error != null && <p style={errorStyle}>{state.password.error}</p>}
            <label>Confirm Password: </label>
            <input name="confirmPassword" type="password" onChange={handleChange} value={state.confirmPassword.value}/>
            {state.confirmPassword.error != null && <p style={errorStyle}>{state.confirmPassword.error}</p>}
            <input type="submit" value="Create User" />
        </form>
<h2>Your Form Data</h2>
<div>
<p>First Name: {state.firstName.value}</p>
<p>Last Name: {state.lastName.value}</p>
<p>Email: {state.email.value}</p>
<p>Password: {state.password.value}</p>
<p>Confirm Password: {state.confirmPassword.value}</p>
</div>
    </div>

    );
};
    
export default UserForm;
