import React from 'react';
import avatar from './avie.png';
import HeadingComponent from '../header/HeadingComponent';
import {findUserById, updateUser, findUserProfile} from '../services/ProfileService';
import './profile.scss';

class ProfileScreenComponent extends React.Component {

    state = {
        sameUser: false,

        userFirstName: '',
        userLastName: '',
        userDob: '',
        userUsername: '',
        userPassword: '',
        userRole: '',
        user: {},
        currBrowsing: {}
    }

    updateUser = () => {

        var user = {};

        if (this.state.sameUser) {
            user = {'username': this.state.userUsername,
                    'password': this.state.userPassword,
                    'dob': this.state.userDob,
                    'firstName': this.state.userFirstName,
                    'lastName': this.state.userLastName};

            if (this.state.userPassword != '') {
                    user = {...user, 
                        'password': this.state.userPassword};
            }
        }

        if (this.state.currBrowsing.role === 'admin') {
            user = {...user,
                    'role': this.state.userRole}
        }

        updateUser(this.state.user.id, user, window.localStorage.getItem('token'))
            .then(update => this.componentDidMount())
    }

    componentDidMount = async () => {
        
        if (!window.localStorage.getItem('token')) {
            window.location.replace("/login");
            return;
        }

        const jwt = window.localStorage.getItem('token');
        const currBrowsingUser = await findUserProfile(jwt);

        if (this.props.userId) {
            const userProfile = await findUserById(jwt, this.props.userId);

            if (userProfile.id === currBrowsingUser.id) {
                this.setState({
                    sameUser: true
                });
            }

            this.setState({
                user: userProfile,
                currBrowsing: currBrowsingUser,
                userUsername: userProfile.username,
                userDob: userProfile.dob.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$2/$3/$1'),
                userFirstName: userProfile.firstName,
                userLastName: userProfile.lastName
            })
        }

        else {

            this.setState({
                user: currBrowsingUser,
                currBrowsing: currBrowsingUser,
                sameUser: true,
                userUsername: currBrowsingUser.username,
                userDob: currBrowsingUser.dob.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$2/$3/$1'),
                userFirstName: currBrowsingUser.firstName,
                userLastName: currBrowsingUser.lastName
            })
        }
    }

    render() {
        return(

            <div>
                <HeadingComponent/>

            <div className='container-fluid'>

                <div className='row whole-page'>
                    <div className='col-3 user-profile-left'>
                        <h2 className='profile-header'>{this.state.sameUser ? `Your Profile` : `${this.state.user.firstName}'s Profile`}</h2>

                        <hr className='line-break'></hr>

                        <ul>
                            <li className='user-data-link'><a className='profile-link' href='/'>
                                {this.state.sameUser ? `Your Polls` : `${this.state.user.firstName}'s Polls`}
                            </a></li>
                            <li className='user-data-link'><a className='profile-link' href='/'>
                                {this.state.sameUser ? `Your Comments` : `${this.state.user.firstName}'s Comments`}
                            </a></li>
                        </ul>

                    </div>

                    <div className='col-9'>
                        <form>
                            <div className='row d-flex justify-content-center user-profile-right'>

                                <div className='avatar profile-whitespace'>
                                    <img className='profile-pic' 
                                        src={avatar}
                                        alt={this.state.user.firstName + "'s avatar"}/>
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
                                    <label htmlFor="dob">Date of Birth (MM/DD/YYYY)</label>
                                    {this.state.sameUser ?
                                    <input className="form-control" id="dob" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userDob: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.userDob} />
                                    :
                                    <input disabled className="form-control" id="dob"
                                           placeholder={this.state.userDob} />
                                    }
                                </div>

                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="role">Role</label>


                                    {this.state.currBrowsing.role === 'admin' ? 
                                    <select id="role" className="form-control" defaultValue={this.state.user.role}
                                            onChange={(e) => {this.setState({userRole: e.target.value})}}>
                                        <option>user</option>
                                        <option>admin</option>
                                    </select>
                                    :
                                    <input disabled className="form-control" id="role" placeholder={this.state.user.role} />
                                    }
                                </div>
                            </div>

                            {(this.state.sameUser || this.state.currBrowsing.role === 'admin') && 
                            <div className='d-flex justify-content-center'>
                            <button type='button'
                                    className='update-profile-btn shadowed p-2' 
                                    onClick={() => this.updateUser()}>
                                        {(this.state.currBrowsing.role === 'admin') && (!this.state.sameUser) ? 
                                                                        "Update Role" : "Save Changes"}</button>
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