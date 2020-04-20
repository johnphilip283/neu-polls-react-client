import React from 'react';
import avatar from './avie.png';
import './profile.scss';

const AnonymousProfileScreenComponent = ({ sameUser, user }) => {

    return(
        <div className='container-fluid'>

            {sameUser ? 

            <div className='row whole-page'>
                <div className='col-3 user-profile-left'>
                    <h2 className='profile-header'>{`${user.username}'s Profile`}
                    </h2>

                    <hr className='line-break'></hr>
                    <ul>
                        <li className='user-data-link'>
                            <a className='profile-link' 
                                href={`${user.id}/polls`}>{`${user.username}'s Polls`}
                            </a>
                        </li>
                        <li className='user-data-link'>
                            <a className='profile-link' href='/'>
                            {`${user.username}'s Comments`}
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='col-9'>
                    <div class="alert alert-danger anonymous-profile-notif" role="alert">
                            <a href="/login">Login</a> to learn more about this user 
                            and gain full access to NEU Polls!
                    </div>
                    <div className='row d-flex justify-content-center user-profile-right'>
                        <div className='avatar profile-whitespace'>
                            <img className='profile-pic' 
                                src={avatar}
                                alt={user.username + "'s avatar"}/>
                        </div>
                        <span className='username'>{user.username}</span>
                    </div>
                </div>
            </div> 
            :
            <div class="alert alert-danger anonymous-profile-notif" role="alert">
                <a href="/login">Login</a> to learn more about  
                user profiles and to gain full access to NEU Polls!
            </div>
            }

            
        </div>
    )
};

export default AnonymousProfileScreenComponent;