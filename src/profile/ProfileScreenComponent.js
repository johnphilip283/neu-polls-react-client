import React from 'react';
import HeadingComponent from '../header/HeadingComponent';
import {findUserById, updateUser, findUserProfile, anonFindUserById } from '../services/ProfileService';
import './profile.scss';
import LoggedInProfileScreenComponent from './LoggedInProfileScreenComponent';
import AnonymousProfileScreenComponent from './AnonymousProfileScreenComponent';

class ProfileScreenComponent extends React.Component {

    state = {
        sameUser: false,
        user: {},
        currBrowsing: {},
        anonymous: false
    }

    updateUser = (user) => {

        updateUser(this.state.user.id, user, window.localStorage.getItem('token'))
            .then(update => this.componentDidMount())
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

                {this.state.anonymous ?

                <AnonymousProfileScreenComponent user={this.state.user}
                                                 sameUser={this.state.sameUser} />
                :
                <LoggedInProfileScreenComponent {...this.state} 
                                                updateUser={this.updateUser}
                                                userId={this.props.userId} />
                }
        </div>

        )
    }
}

    

export default ProfileScreenComponent;