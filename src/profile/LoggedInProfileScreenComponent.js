import React from 'react';
import avatar from './avie.png';
import './profile.scss';

class LoggedInProfileScreenComponent extends React.Component {

    state = {
        userFirstName: '',
        userLastName: '',
        userDob: '',
        userUsername: '',
        userPassword: '',
        userRole: ''
    }

    render() {
        return(
            <div className='container-fluid'>

                <div className='row whole-page'>
                    <div className='col-3 user-profile-left'>
                        <h2 className='profile-header'>{this.props.sameUser ? `Your Profile` : 
                            `${this.props.user.firstName}'s Profile`}
                        </h2>

                        <hr className='line-break'></hr>

                        <ul>
                            <li className='user-data-link'>
                                <a className='profile-link' 
                                    href={this.props.userId ? `${this.props.user.id}/polls` :
                                     `profile/${this.props.user.id}/polls`}>
                                {this.props.sameUser ? `Your Polls` : `${this.props.user.firstName}'s Polls`}
                            </a></li>
                            <li className='user-data-link'><a className='profile-link' href='/'>
                                {this.props.sameUser ? `Your Comments` : `${this.props.user.firstName}'s Comments`}
                            </a></li>
                        </ul>

                    </div>

                    <div className='col-9'>
                        <form>
                            <div className='row d-flex justify-content-center user-profile-right'>

                                <div className='avatar profile-whitespace'>
                                    <img className='profile-pic' 
                                        src={avatar}
                                        alt={this.props.user.firstName + "'s avatar"}/>
                                </div>

                                <span className='username'>
                                    {this.props.user.firstName + ' ' + this.props.user.lastName}
                                </span>

                            </div>

                            <div className='row d-flex justify-content-center'>
                                    {this.props.sameUser 
                                    ?
                                    <div className='col-sm-5 profile-whitespace'>
                                        <label htmlFor="username">Username</label>
                                        <input className="form-control" id="username" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userUsername: e.target.value
                                                })
                                            }}
                                            placeholder={this.props.user.username} />
                                    </div>
                                    :
                                    <div className='col-sm-10 profile-whitespace'>
                                        <label htmlFor="username">Username</label>
                                        <input disabled className="form-control" id="username"
                                                placeholder={this.props.user.username} />
                                    </div>
                                    }

                                {this.props.sameUser &&
                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" id="password"
                                            onChange={(e) => {
                                                this.setState({
                                                    userPassword: e.target.value
                                                })
                                            }}
                                            placeholder={this.props.user.password} />
                                </div>
                                }
                            </div>

                            {this.props.sameUser &&
                            <div className = 'row d-flex justify-content-center'>
                                <div className='col-sm-10 profile-whitespace'>
                                    <label htmlFor="email">Email Address</label>
                                    <input className="form-control" id="email" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userEmail: e.target.value
                                                })
                                            }}
                                            placeholder={this.props.user.email} />
                                </div>
                            </div>
                            }

                            <div className='row d-flex justify-content-center'>
                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="first_name">First Name</label>

                                    {this.props.sameUser ?
                                    <input className="form-control" id="first_name" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userFirstName: e.target.value
                                                })
                                            }}
                                            placeholder={this.props.user.firstName} />
                                    :
                                    <input disabled className="form-control" id="first_name"
                                           placeholder={this.props.user.firstName} />
                                    }
                                </div>

                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="last_name">Last Name</label>

                                    {this.props.sameUser ? 
                                    <input className="form-control" id="last_name"
                                            onChange={(e) => {
                                                this.setState({
                                                    userLastName: e.target.value
                                                })
                                            }}
                                            placeholder={this.props.user.lastName} />
                                    :
                                    <input disabled className="form-control" id="last_name"
                                           placeholder={this.props.user.lastName} />
                                    }
                                </div>
                            </div>

                            <div className='row d-flex justify-content-center'>
                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="dob">Date of Birth (MM/DD/YYYY)</label>
                                    {this.props.sameUser ?
                                    <input className="form-control" id="dob" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userDob: e.target.value
                                                })
                                            }}
                                            placeholder={this.props.userDob} />
                                    :
                                    <input disabled className="form-control" id="dob"
                                           placeholder={this.props.userDob} />
                                    }
                                </div>

                                <div className='col-sm-5 profile-whitespace'>
                                    <label htmlFor="role">Role</label>


                                    {this.props.currBrowsing.role === 'admin' ? 
                                    <select id="role" className="form-control" defaultValue={this.props.user.role}
                                            onChange={(e) => {this.setState({userRole: e.target.value})}}>
                                        <option>user</option>
                                        <option>admin</option>
                                    </select>
                                    :
                                    <input disabled className="form-control" id="role" placeholder={this.props.user.role} />
                                    }
                                </div>
                            </div>

                            {(this.props.sameUser || this.props.currBrowsing.role === 'admin') && 
                            <div className='d-flex justify-content-center'>
                            <button type='button'
                                    className='update-profile-btn shadowed p-2' 
                                    onClick={() => {
                                        var user = {};

                                        if (this.props.sameUser) {
                                            if (this.state.userUsername !== '') {
                                                user = {...user, 'username': this.state.userUsername}
                                            }
                                            if (this.state.userDob !== '') {
                                                user = {...user, 'dob': this.state.userDob}
                                            }
                                            if (this.state.userFirstName !== '') {
                                                user = {...user, 'firstName': this.state.userFirstName}
                                            }
                                            if (this.state.userLastName !== '') {
                                                user = {...user, 'lastName': this.state.userLastName}
                                            }
                                            if (this.state.userPassword !== '') {
                                                    user = {...user, 'password': this.state.userPassword};
                                            }
                                        };

                                        if ((this.props.currBrowsing.role === 'admin') && (this.props.userRole !== '')) {
                                            user = {...user, 'role': this.state.userRole}
                                        };
                                        this.props.updateUser(user)}}>
                                        {(this.props.currBrowsing.role === 'admin') && (!this.props.sameUser) ? 
                                                                        "Update Role" : "Save Changes"}</button>
                            </div>
                            }
                        </form>
                    </div>
                </div> 
            </div>
        )
    }

};

export default LoggedInProfileScreenComponent;