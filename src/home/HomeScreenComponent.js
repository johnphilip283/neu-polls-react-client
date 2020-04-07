import React from 'react';
import './home.scss';
import {findAllPolls} from "../services/PollService";
import PollComponent from './PollComponent'

class HomeScreenComponent extends React.Component {

    state = {
        polls: []
    }

    componentDidMount = async () => {
        const polls = await findAllPolls()
        this.setState({
            polls: polls
        })
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

                <div class='container-fluid'>
                    {this.state.polls.map(function(poll, index) {
                        return <PollComponent
                                    key={index}
                                    poll={poll}/>
                    })}

                </div>
            </div>
        )
    }
}

export default HomeScreenComponent;