import React from 'react';
import HeadingComponent from '../header/HeadingComponent';
import {findUserById, updateUser, findUserProfile, anonFindUserById, deleteUser } from '../services/ProfileService';
import './profile.scss';
import LoggedInProfileScreenComponent from './LoggedInProfileScreenComponent';
import AnonymousProfileScreenComponent from './AnonymousProfileScreenComponent';

class ProfileScreenComponent extends React.Component {

    state = {
        sameUser: false,
        user: {},
        currBrowsing: {},
        anonymous: false,
        deleted: false
    }

    updateUser = (user) => {

        if (this.state.sameUser) {
            if (user.password.length < 8) {
                alert('Error: new password must be at least 8 characters.')
            }

            else {
                updateUser(this.state.user.id, user, window.localStorage.getItem('token'))
                .then(update => this.componentDidMount())
            }
        }

        else {
            updateUser(this.state.user.id, user, window.localStorage.getItem('token'))
                .then(update => this.componentDidMount())
        }
    }

    adminDeleteUser = (uid) => {
        deleteUser(uid)
            .then(update => {
                alert('Successfully deleted user.')
                this.setState({deleted: true})
                window.location.replace("/");
            })
    }

    componentDidMount = async () => {
        
        if (!window.localStorage.getItem('token')) {

            if (this.props.userId) {
                anonFindUserById(this.props.userId)
                    .then(result => this.setState({
                        user: result,
                        anonymous: true,
                        sameUser: true
                    }))
                return;
            }

            else {
                this.setState({
                    user: {},
                    anonymous: true,
                    sameUser: false
                })
                return;
            }
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
                userDob: userProfile.dob.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$2/$3/$1'),

            })
        }

        else {
            this.setState({
                user: currBrowsingUser,
                currBrowsing: currBrowsingUser,
                sameUser: true,
                userDob: currBrowsingUser.dob.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$2/$3/$1')
            })
        }
    }

    render() {
        return(

            <div>
                <HeadingComponent/>

                {(this.state.anonymous && !this.props.userId) ?

                this.props.history.push('/login')

                :

                this.state.anonymous ?

                <AnonymousProfileScreenComponent user={this.state.user}
                                                 sameUser={this.state.sameUser} />
                :
                <LoggedInProfileScreenComponent {...this.state} 
                                                updateUser={this.updateUser}
                                                userId={this.props.userId}
                                                deleteUser={this.adminDeleteUser} />
                }
        </div>

        )
    }
}

    

export default ProfileScreenComponent;