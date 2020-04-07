import React from 'react';
import './profile.scss';
import {findUserById, updateUser} from "../services/ProfileService";

class ProfileScreenComponent extends React.Component {

    state = {
        userFirstName: '',
        userLastName: '',
        userAge: '',

        // HARDCODE - need to fix in user model
        imgUrl: 'https://cdn.hswstatic.com/gif/hamster-alone.jpg',
        userEmail: 'kristi.bui27@gmail.com',
        userPassword: 'hamster_peace_sign_123.jpg',

        user: {}
    }

    /**
     * Update user information.
     */
    updateUser = (user) => {
        updateUser(user.id, user)
            .then(updatedUser => this.setState({
                user: user
            }))
    }

    componentDidMount = async () => {
        const user = await findUserById(this.props.userId)
        this.setState({
            user: user,
            userFirstName: user.firstName,
            userLastName: user.lastName,
            userAge: user.age,
        })
    }

    render() {
        return(

            <div>
                <nav className='nav polls-nav'>
                    <a className="navbar-brand" href="/">NEU Polls</a>
                    <a className='nav-link' href="/">Home</a>
                    <a className="nav-link" href="/profile">Profile</a>
                    <a className="nav-link" href="/profile">Users</a>
                    <a className="nav-link" href="/">Logout</a>
                </nav>

            <div className='container-fluid'>

                <div className='row whole-page'>
                    <div className='col-sm-3 user-profile-left'>
                        <h2 className='profile-header'>User Profile</h2>

                        <hr class='line-break'></hr>

                        <ul>
                            <li className='user-data-link'><a href='/'>Your Polls</a></li>
                            <li className='user-data-link'><a href='/'>Your Comments</a></li>
                        </ul>
                    </div>

                    <div className='col-sm-9'>
                        <form>
                            <div class='row d-flex justify-content-center user-profile-right'>

                                <div className='avatar profile-whitespace'>
                                    <img className='profile-pic' 
                                        src={this.state.imgUrl}
                                        alt={this.state.user.firstName + "'s avatar"}/>

                                    <div className="overlay">
                                        <span className='edit-avatar'>
                                            <a href='/'>Edit Avatar</a>
                                        </span>
                                    </div>
                                </div>

                                <span className='username'>
                                    {this.state.user.firstName + ' ' + this.state.user.lastName}
                                </span>

                            </div>

                            <div class='row d-flex justify-content-center'>
                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="email">Email Address</label>
                                    <input className="form-control" id="email" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userEmail: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.userEmail} />
                                </div>

                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" id="password"
                                            onChange={(e) => {
                                                this.setState({
                                                    userPassword: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.userPassword} />
                                </div>
                            </div>

                            <div class='row d-flex justify-content-center'>
                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="first_name">First Name</label>
                                    <input className="form-control" id="first_name" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userFirstName: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.firstName} />
                                </div>

                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input className="form-control" id="last_name"
                                            onChange={(e) => {
                                                this.setState({
                                                    userLastName: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.lastName} />
                                </div>
                            </div>

                            <div class='row d-flex justify-content-center'>
                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="age">Age</label>
                                    <input className="form-control" id="age" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userAge: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.age} />
                                </div>

                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="phone_number">Role</label>
                                    <input className="form-control" id="phone_number" placeholder="Admin" /> 
                                </div>
                            </div>

                            <div class='d-flex justify-content-center'>
                            <button type='button'
                                    className='update-profile-btn shadowed p-2' 
                                    onClick={() => {
                                            const updatedUser = {...this.state.user, 
                                                                    'age': this.state.userAge,
                                                                    'firstName': this.state.userFirstName,
                                                                    'lastName': this.state.userLastName};
                                            this.updateUser(updatedUser)}}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>

        )
    }
}

    

export default ProfileScreenComponent;