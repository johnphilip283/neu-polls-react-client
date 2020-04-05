import React from 'react';
import './profile.scss';

class ProfileScreenComponent extends React.Component {

    render() {
        return(

            <div>
                <nav class='nav polls-nav'>
                <a class="navbar-brand">NEU Polls</a>
                <a class='nav-link' href="/">Home</a>
                <a class="nav-link" href="/profile">Profile</a>
                <a class="nav-link" href="">Logout</a>
            </nav>

            <div className='container-fluid'>

                <div class='row whole-page'>

                    <div className='col-3 user-profile-left'>
                        <h2 class='profile-header'>User Profile</h2>
                        <ul>
                            <li class='user-data-link'><a href=''>Your Polls</a></li>
                            <li class='user-data-link'><a href=''>Your Comments</a></li>
                        </ul>
                    </div>

                    <div className='col-9 user-profile-right'>

                    <form>
                        <div class='form-group'>

                            <div class='row d-flex justify-content-center'>

                                <div class='profile-whitespace'>
                                    <div class='col-3'>
                                        <div class='avatar profile-whitespace'>
                                            <img class='profile-pic' src='https://cdn.hswstatic.com/gif/hamster-alone.jpg'/>
                                        </div>
                                    </div>
                                </div>

                                <div class='col-7 user-header profile-whitespace'>
                                    <span class='username'>Kristi Bui</span>
                                </div>

                                <div class='col-5 profile-whitespace'>
                                    <label for="first_name">First Name</label>
                                    <input class="form-control" id="first_name" placeholder="Krusty" />
                                </div>

                                <div class='col-5 profile-whitespace'>
                                    <label for="last_name">Last Name</label>
                                    <input class="form-control" id="last_name" placeholder="Booby" />
                                </div>
                                <div class='col-5 profile-whitespace'>
                                    <label for="dob">Age</label>
                                    <input class="form-control" id="dob" placeholder="21" />
                                </div>

                                <div class='col-5 profile-whitespace'>
                                    <label for="phone_number">Role</label>
                                    <input class="form-control" id="phone_number" placeholder="Admin" /> 
                                </div>

                                <div class='col-5'>
                                    <button class='update-profile-btn shadowed p-2 ' type='submit'>Save Changes</button>
                                </div>
                                <div class='col-5'></div>
                            </div>
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