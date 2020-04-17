import React, { useState } from 'react';
import { loginUser } from '../services/AuthService';

import './login.scss';

const LoginScreenComponent = ({ signUpHandler }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameHandler = evt => setUsername(evt.target.value);    
    const passwordHandler = evt => setPassword(evt.target.value);  
    
    const logIn = () => {
        console.log("hello");
        loginUser(username, password).then(res => {
            if (res && res.jwt) {
                window.localStorage.setItem('token', res.jwt);
                window.location.replace("/");
            }
        });
    }

    return (
        <>
            <h1 class='p-2'>Login</h1>
            <div class='p-2'>
                <label for="username">Username</label>
                <input className='form-control' name="username" type="text" onChange={usernameHandler}/>
            </div>
            <div class='p-2'>
                <label for="password">Password</label>
                <input className='form-control' name="password" type="password" onChange={passwordHandler}/>
            </div>
            <div className="p-2 d-flex flex-column">
                <button className='m-2 p-2 primary shadowed' onClick={logIn}>
                    Log In
                </button>
                <button className='m-2 p-2 primary shadowed' onClick={signUpHandler}>
                    Sign up
                </button>
            </div>
        </>
    )
    
}

export default LoginScreenComponent;
