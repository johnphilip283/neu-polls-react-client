import React from 'react';
import './profile.scss';

const ProfileScreenComponent = () => 

    <div className='container-fluid'>

        <nav class="navbar polls-nav">
            <a class="navbar-brand">NEU Polls</a>


                <ul class='navbar-nav'>
                    <li class='nav-item'>
                        <a class='nav-link' href="/">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/profile">Profile</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
        </nav>

        <div class='row whole-page'>

            <div className='col-3 user-profile-left'>
                <h2 class='profile-header'>User Profile</h2>
                <ul>
                    <li class='user-data-link'>Your Polls</li>
                    <li class='user-data-link'>Your Comments</li>
                </ul>
            </div>

            <div className='col-9 user-profile-right'>

                <form>
                    <div class='form-group'>

                        <div class='row d-flex justify-content-center'>

                            <div class='col-3'>
                                <img src=''></img>
                            </div>

                            <div class='col-7'>
                                <h3>Kristi Bui</h3>
                            </div>
                            
                            <div class='col-5'>
                                <label for="email">Email address</label>
                                <input class="form-control" id="email" placeholder="bui.k@husky.neu.edu" />
                            </div>

                            <div class='col-5'>
                                <label for="password">Password</label>
                                <input class="form-control" id="password" placeholder="hello_world_123" />
                            </div>



                            <div class='col-5'>
                                <label for="first_name">First Name</label>
                                <input class="form-control" id="first_name" placeholder="Krusty" />
                            </div>

                            <div class='col-5'>
                                <label for="last_name">Last Name</label>
                                <input class="form-control" id="last_name" placeholder="Booby" />
                            </div>



                            <div class='col-5'>
                                <label for="dob">Date of Birth</label>
                                <input class="form-control" id="dob" placeholder="04/12/1998" />
                            </div>

                            <div class='col-5'>
                                <label for="phone_number">Phone #</label>
                                <input class="form-control" id="phone_number" placeholder="(203)-727-0272" /> 
                            </div>
                        </div>
                    </div>

                    <button class='update-profile-btn shadowed m-2 p-2' type='submit'>Save Changes</button>
                </form>
            </div>
        
        </div>


    </div>

export default ProfileScreenComponent;