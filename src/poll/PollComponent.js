import React, { useState, useEffect } from 'react';
import './poll.scss';
import { withRouter } from 'react-router-dom';

const Option = ({ option, optionHandler }) => {
    return (
        <div class="option">
            <input type="radio" onClick={optionHandler} className="mr-2" id={option} name="option" value={option}/>
            <div class="progress option-bar">
                <div class="progress-bar p-3" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{option}</div>
            </div>
        </div>
    );
}

const PollComponent = ({ poll, history, showButton }) => {

    const jwt = window.localStorage.getItem('token') || '';

    // TODO: IMPLEMENT VOTING
    const [selectedOption, setSelectedOption] = useState('');
    
    const { firstName, lastName, role } = poll.author;

    const optionHandler = e => setSelectedOption(e.target.value);

    const viewDetailsHandler = () => history.push(jwt ? `/details/${poll.id}` : `/login`);
    
    return (
        <div className="poll m-3">
            <div className="inner-content p-4">
                <p className='poll-author-name mb-0'>{`${firstName ? firstName + ' ' + lastName : 'Anonymous'}`}</p>
                <div className="poll-byline mt-1">
                    <span className="poll-role mr-1">{(role === 'user' || !role) ? 'Member' : 'Admin'}</span>-
                    <span className='poll-time ml-1'>{new Date(poll.inserted_at).toDateString()}</span>
                </div>
                <p className='poll-question-text mt-2 mb-2'>{poll.text}</p>
                <form className="options">
                    {poll && poll.options && poll.options.map((option, idx) => <Option optionHandler={optionHandler} key={idx} option={option}/>)}
                </form>
            </div>
            { showButton && <button className="details-link" onClick={viewDetailsHandler}>
                                    View details
                            </button>
            }
            
        </div>
    );
}

export default withRouter(PollComponent);