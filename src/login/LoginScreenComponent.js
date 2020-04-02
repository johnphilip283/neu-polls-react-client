import React from 'react';
import './login.scss';

const LoginScreenComponent = () => 
    <div className='container-fluid'>
        <div className='row whole-page'>
            <div className='col-5 login-left'>
                <p className='middle'>
                    NEU<br/>
                    <span className='offset'>Polls</span>
                </p>
            </div>
            <div className="col-7">
                <div className='middle'>
                    <div class='p-2'>Login</div>
                    <div class='p-2'>
                        <label for="user-email">Your email address</label>
                        <input className='form-control' name="user-email" type="email"/>
                    </div>
                    <div class='p-2'>
                        <label for="password">Password</label>
                        <input className='form-control' name="password" type="password"/>
                    </div>
                    <div className="p-2 d-flex flex-column">
                        <button className='m-2 p-2 primary shadowed'>
                            Sign up
                        </button>
                        <button className='m-2 p-2 primary shadowed'>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default LoginScreenComponent;
