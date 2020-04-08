import React from 'react';
import './profile.scss';
import {findUserById, updateUser, findUserProfile} from "../services/ProfileService";

class ProfileScreenComponent extends React.Component {

    state = {
        sameUser: false,

        userFirstName: '',
        userLastName: '',
        userDob: '',
        userUsername: '',

        // HARDCODE for now - add image in user model?
        imgUrl: 'https://cdn.hswstatic.com/gif/hamster-alone.jpg',

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

        // TODO: save jwt in props / localStorage / cookies
        const jwt = 'uwu_fix_this_later'
        
        // Looking at someone else's profile: URL w/ the user id
        if (this.props.userId) {
            console.log("made it here 1!")
            const user = await findUserById(jwt, this.props.userId)

            // check if you're looking at your own profile
            // (so you can have editing privileges)
            const user_check = await findUserProfile(jwt)
            if (user_check === user) {
                this.setState({
                    sameUser: true
                })
            }

            this.setState({
                user: user
            })
        }

        // Looking at your profile:
        else {
            // TODO: send the JWT in here
            const user = await findUserProfile(jwt)
            this.setState({
                user: user,
                sameUser: true
            })
        }


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
                    <div className='col-3 user-profile-left'>
                        <h2 className='profile-header'>User Profile</h2>

                        <hr className='line-break'></hr>

                        <ul>
                            <li className='user-data-link'><a href='/'>Your Polls</a></li>
                            <li className='user-data-link'><a href='/'>Your Comments</a></li>
                        </ul>
                    </div>

                    <div className='col-9'>
                        <form>
                            <div className='row d-flex justify-content-center user-profile-right'>

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

                            <div className='row d-flex justify-content-center'>
                                    {this.state.sameUser 
                                    ?
                                    <div className='col-sm-5 profile-whitespace'>
                                        <label htmlFor="username">Username</label>
                                        <input className="form-control" id="username" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userUsername: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.username} />
                                    </div>
                                    :
                                    <div className='col-sm-10 profile-whitespace'>
                                        <label htmlFor="username">Username</label>
                                        <input disabled className="form-control" id="username"
                                                placeholder={this.state.user.username} />
                                    </div>
                                    }

                                {this.state.sameUser &&
                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" id="password"
                                            onChange={(e) => {
                                                this.setState({
                                                    userPassword: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.password} />
                                </div>
                                }
                            </div>

                            {this.state.sameUser &&
                            <div className = 'row d-flex justify-content-center'>
                                <div className='col-sm-10 profile-whitespace'>
                                    <label htmlFor="email">Email Address</label>
                                    <input className="form-control" id="email" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userEmail: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.email} />
                                </div>
                            </div>
                            }

                            <div className='row d-flex justify-content-center'>
                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="first_name">First Name</label>

                                    {this.state.sameUser ?
                                    <input className="form-control" id="first_name" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userFirstName: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.firstName} />
                                    :
                                    <input disabled className="form-control" id="first_name"
                                           placeholder={this.state.user.firstName} />
                                    }
                                </div>

                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="last_name">Last Name</label>

                                    {this.state.sameUser ? 
                                    <input className="form-control" id="last_name"
                                            onChange={(e) => {
                                                this.setState({
                                                    userLastName: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.lastName} />
                                    :
                                    <input disabled className="form-control" id="last_name"
                                           placeholder={this.state.user.lastName} />
                                    }
                                </div>
                            </div>

                            <div className='row d-flex justify-content-center'>
                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="dob">Date of Birth</label>
                                    {this.state.sameUser ?
                                    <input className="form-control" id="dob" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userDob: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.dob} />
                                    :
                                    <input disabled className="form-control" id="dob"
                                           placeholder={this.state.user.dob} />
                                    }
                                </div>

                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="role">Role</label>
                                    {this.state.sameUser ? 
                                    <input className="form-control" id="role" placeholder="Admin" /> 
                                    :
                                    <input disabled className="form-control" id="role" placeholder="Admin" />
                                    }
                                </div>
                            </div>

                            {this.state.sameUser && 

                            <div className='d-flex justify-content-center'>
                            <button type='button'
                                    className='update-profile-btn shadowed p-2' 
                                    onClick={() => {
                                            const updatedUser = {...this.state.user, 
                                                                    'username': this.state.userUsername,
                                                                    'password': this.state.userPassword,
                                                                    'dob': this.state.userAge,
                                                                    'firstName': this.state.userFirstName,
                                                                    'lastName': this.state.userLastName};
                                            this.updateUser(updatedUser)}}>Save Changes</button>
                            </div>
                            
                            }
                        </form>
                    </div>
                </div> 
            </div>
        </div>

        )
    }
}

    

export default ProfileScreenComponent;