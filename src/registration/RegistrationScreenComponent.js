import React from 'react';
import './registration.scss';
import { registerUser } from '../services/ProfileService';

class RegistrationScreenComponent extends React.Component {

    state = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        dob: ''
    }

    // Register new user
    register = (user) => {
        registerUser(user)
            .then(newUser => console.log(newUser))
        // route to profile page
        //.then(newUser => this.props.history.push('/profile'))
    }
    
    render() {
        return(
        <div className='container-fluid'>
            <div className='row whole-page'>
                <div className='col-5 login-left'>
                    <p className='middle'>
                        NEU<br/>
                        <span className='offset'>Polls</span>
                    </p>
                </div>
                <div className="col-7">
                    <div className='col-8 middle'>
                        <div className='p-2'>Sign Up</div>
                        <div className='p-2'>
                            <label htmlFor="username">Username</label>
                            <input className='form-control' name="username"
                                   placeholder='username' onChange={(e) => {
                                                    this.setState({username: e.target.value})}}/>
                        </div>
                        <div className='p-2'>
                            <label htmlFor="password">Password</label>
                            <input className='form-control' name="password" type="password"
                                   placeholder='password' onChange={(e) => {
                                                    this.setState({password: e.target.value})}}/>
                        </div>
                        
                        <div className='p-2'>
                            <label htmlFor="user-email">Your email address</label>
                            <input className='form-control' name="user-email" type="email"
                                   placeholder='email address' onChange={(e) => {
                                                    this.setState({email: e.target.value})}}/>
                        </div>

                        <div className='p-2'>
                            <label htmlFor="first-name">Your First Name</label>
                            <input className='form-control' name="first-name" type="text"
                                   placeholder='first name' onChange={(e) => {
                                                    this.setState({firstName: e.target.value})}}/>
                        </div>

                        <div className='p-2'>
                            <label htmlFor="last-name">Your Last Name</label>
                            <input className='form-control' name="last-name" type="text"
                                   placeholder='last name' onChange={(e) => {
                                                    this.setState({lastName: e.target.value})}}/>
                        </div>

                        <div className='p-2'>
                            <label htmlFor="dob">Your Date of Birth</label>
                            <input className='form-control' name="dob"
                                   placeholder='mm/dd/YYY' onChange={(e) => {
                                                    this.setState({dob: e.target.value})}}/>
                        </div>

                        <div className="p-2 d-flex flex-column">
                            <button className='m-2 p-2 primary shadowed'
                                    onClick={() => {
                                        const newUser = {'username': this.state.username,
                                                         'password': this.state.password,
                                                         'email': this.state.email,
                                                         'firstName': this.state.firstName,
                                                         'lastName': this.state.lastName,
                                                         'dob': this.state.dob};
                                        this.register(newUser);
                                    }}>
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
} 

export default RegistrationScreenComponent;
