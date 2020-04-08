import React, { useState } from 'react';
import { registerUser } from '../services/AuthService';

const SignupScreenComponent = () => {

    const [user, setUser] = useState({});
    const [confirmation, setConfirmation] = useState('');

    const formHandler = name => event => setUser({ ...user, [name]: event.target.value });

    const confirmationHandler = evt => setConfirmation(evt.target.value);
    
    const signUp = () => {
        if (confirmation === user.password) {
             registerUser(user).then(res => {
                if (res && res.token) {
                    window.localStorage.setItem('token', res.token);
                    window.location.replace("/");
                }
            })
        }
    };

    return (
        <>
            <h1 class='p-2'>Sign Up</h1>
            <div class='p-2'>
                <label for="first-name">First Name</label>
                <input className='form-control' name="first-name" type="text" onChange={formHandler('firstName')}/>
            </div>
            <div class='p-2'>
                <label for="last-name">Last Name</label>
                <input className='form-control' name="last-name" type="text" onChange={formHandler('lastName')}/>
            </div>
            <div class='p-2'>
                <label for="user-email">Your email address</label>
                <input className='form-control' name="user-email" type="email" onChange={formHandler('email')}/>
            </div>
            <div class='p-2'>
                <label for="dob">Your Date of Birth</label>
                <input className='form-control' name="dob" type="date" onChange={formHandler('dob')}/>
            </div>
            <div class='p-2'>
                <label for="username">Username</label>
                <input className='form-control' name="username" type="text" onChange={formHandler('username')}/>
            </div>
            <div class='p-2'>
                <label for="password">Password</label>
                <input className='form-control' name="password" type="password" onChange={formHandler('password')}/>
            </div>
            
            <div class='p-2'>
                <label for="confirmation">Password Confirmation</label>
                <input className='form-control' name="confirmation" type="password" onChange={confirmationHandler}/>
            </div>
            <div className="p-2 d-flex flex-column">
                <button className='m-2 p-2 primary shadowed' onClick={signUp}>
                    Sign Up
                </button>
            </div> 
        </>
    )
}

export default SignupScreenComponent;