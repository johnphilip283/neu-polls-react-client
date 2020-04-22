import React from 'react';
import './privacy.scss';
import HeadingComponent from '../header/HeadingComponent';
import phones from './phones.svg';

const PrivacyComponent = ({ }) => {


    return(
        <div>
            <HeadingComponent />

            <div className='container-fluid opening-header'>
                <div className='row'>
                    <div className='col-md-6 text-header'>
                        <h1>NEU Polls - Privacy Policy</h1>
                        <span>Learn more about how NEU Polls collects, processes, and shares your data.</span>
                    </div>
                    <img className=' col-md-6 profile-pic' src={phones} alt='lock-image'/>
                </div>
            </div>

            <div className='container-text'>
                <h3>Overview</h3>
                <hr/>
                <p>NEU Polls relies on your interaction and data to power and provide quality services 
                    to our users. As such, we are responsible and strive to be transparent in ensuring 
                    that your data is being handled safely. This privacy policy is meant to give you 
                    as thorough a picture as possible on how we collect, process, and protect your data.
                </p>

                <h3 className='headline'>What data we collect on you</h3>
                <hr/>
                <p>Our service has two main entry points for data collection: the first is with user 
                    registration, and the second is with the creation of polls by users.
                </p>
                <ul>
                    <li><b>Registration:</b> New users who register will be asked to supply basic 
                    information about themselves: specifically, we collect a user’s email, 
                    date of birth, and first and last name, alongside a username and 
                    password that they create.
                    </li>
                    <li><b>Poll Creation:</b> Our application’s main purpose is for users to have 
                    a unique platform to create, vote, and comment on polls. As such, polls that 
                    are made by users are intrinsically part of a user’s data. Specifically, 
                    the data that polls are composed of consists of a question (text) that 
                    the user creates, options (text) that the user poses, and the votes on 
                    the poll that all users can make.
                    </li>
                    <li><b>Comments:</b> Comments are another form of data on the platform, 
                    that are associated with polls. Comments are made on polls by users, 
                    and can contain text and gifs (pulled from the <a href='https://developers.giphy.com/'>Giphy API</a>).
                    </li>
                </ul>

                <h3 className='headline'>What we do with your data</h3>
                <hr/>
                <p>Our application only collects and utilizes data that is required in order 
                    to provide users our service. Currently, NEU Polls only utilizes user data 
                    as a way to register a user into the system so that we can ensure each 
                    user has access to the application. Outside of this functionality, we 
                    do not process or handle user data.</p>
                <p>Furthermore, we utilize JSON web 
                    tokens (JWT) to protect your data. A unique JWT is generated for each 
                    user which is required for calls to read and write to your data, 
                    ensuring that your data access is private to you. The JWT is also 
                    required for all endpoints on our application except the ones 
                    specifically meant for anonymous viewers. This means that an 
                    outside party attempting to view access to our data will not be 
                    able to without a JWT, since the JWT is uniquely generated and 
                    privately stored in our backend with no means of outside access.
                </p>

                <h3 className='headline'>Where your data goes / Who else sees your data</h3>
                <hr/>
                <p>We allow for users to view the profiles of other users. However, 
                    other users will not be able to see sensitive information about you 
                    - specifically, they will not be able to view your password and email. 
                    Full profiles will not be visible to those not logged into the application: 
                    specifically, only a user’s username will be visible to anonymous viewers 
                    on the platform.</p>
                <p>As a fundamental part of our service’s platform, other users will be able 
                    to see polls that you create. Similarly to user profiles, viewing polls 
                    will not be visible to those not logged into the application - 
                    anonymous users will only be able to see the three most recent polls 
                    made, with the poll author’s identity hidden. We also do not share 
                    data outside of the application to any parties.</p>
                <p>As a user, you will have control over your data. You will be allowed to edit 
                    and delete polls that you make, as well as edit information about yourself. 
                    Specifically, you can modify your first name, last name, username, password, 
                    email, and date of birth. The only other users who have access to modifying 
                    and deleting your information are admins. This is a necessity, as the 
                    responsibility of admins is to ensure that the platform discourse is 
                    conducted safely, so updates and edits to data will only be performed 
                    with discretion.</p>
            </div>
        </div>
    )


};

export default PrivacyComponent;