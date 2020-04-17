import React from 'react';
import './poll.scss';

const Option = ({ option }) => {
    return (
        <div class="option">
            <input type="checkbox" className="mr-2" id={option}/>
            <label class="question" for={option}>{option}</label>
        </div>
    );
}

const PollComponent = ({ poll }) => {
    return (
        <div class="poll">
            <div class="inner-content">
                <p class="m4">{poll.text}</p>
                <div class="options">
                    {poll.options.map(option => <Option option={option}/>)}
                </div>
            </div>
        </div>
    );
}

export default PollComponent;