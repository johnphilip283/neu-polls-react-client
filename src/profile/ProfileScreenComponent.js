import React from 'react';
import './profile.scss';
import {findAllUsers, findUserById, updateUser} from "../services/ProfileService";

class ProfileScreenComponent extends React.Component {

    state = {
        userFirstName: '',
        userLastName: '',
        userAge: '',
        imgUrl: 'https://cdn.hswstatic.com/gif/hamster-alone.jpg',

        // hardcode for now until API is working
        // user: {}
        user: {
            "updated_at": "2020-04-05T02:31:45",
            "polls": {
              "__owner__": "Elixir.Polls.User",
              "__field__": "polls",
              "__cardinality__": "many"
            },
            "lastName": "Bui",
            "inserted_at": "2020-04-05T02:31:45",
            "id": "e9a52ecc-774d-43db-846b-da03cf63381e",
            "firstName": "Kristi",
            "comments": {
              "__owner__": "Elixir.Polls.User",
              "__field__": "comments",
              "__cardinality__": "many"
            },
            "age": 21,
            "__meta__": {
              "state": "loaded",
              "source": "users",
              "schema": "Elixir.Polls.User",
              "prefix": null,
              "context": null
            }
          }
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
            user: user
        })
    }

    render() {
        return(

            <div>
                <nav class='nav polls-nav'>
                <a class="navbar-brand">NEU Polls</a>
                <a class='nav-link' href="/">Home</a>
                <a class="nav-link" href="/profile">Profile</a>
                <a class="nav-link" href="/profile">Users</a>
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
                                            <img class='profile-pic' 
                                                src={this.state.imgUrl}/>

                                            <div class="overlay">
                                                <span class='edit-avatar'>
                                                    <a href=''>Edit Avatar</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class='col-7 user-header profile-whitespace'>
                                    <span class='username'>
                                        {this.state.user.firstName + ' ' + this.state.user.lastName}
                                    </span>
                                </div>

                                <div class='col-5 profile-whitespace'>
                                    <label for="first_name">First Name</label>
                                    <input class="form-control" id="first_name" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userFirstName: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.firstName} />
                                </div>

                                <div class='col-5 profile-whitespace'>
                                    <label for="last_name">Last Name</label>
                                    <input class="form-control" id="last_name"
                                            onChange={(e) => {
                                                this.setState({
                                                    userLastName: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.lastName} />
                                </div>
                                <div class='col-5 profile-whitespace'>
                                    <label for="age">Age</label>
                                    <input class="form-control" id="age" 
                                            onChange={(e) => {
                                                this.setState({
                                                    userAge: e.target.value
                                                })
                                            }}
                                            placeholder={this.state.user.age} />
                                </div>

                                <div class='col-5 profile-whitespace'>
                                    <label for="phone_number">Role</label>
                                    <input class="form-control" id="phone_number" placeholder="Admin" /> 
                                </div>

                                <div class='col-5'>
                                    <button type='button'
                                            class='update-profile-btn shadowed p-2 ' 
                                            onClick={(prevState) => {
                                                        const updatedUser = {...prevState.user, 
                                                                                age: this.state.userAge,
                                                                                firstName: this.state.userFirstName,
                                                                                lastName: this.state.userLastName};
                                                        console.log(updatedUser)
                                                        this.updateUser(updatedUser)}
                                                    }>Save Changes</button>
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