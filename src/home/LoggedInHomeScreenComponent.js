import React, { useState, useEffect } from 'react';
import { getAllPolls } from '../services/PollService';
import PollComponent from '../poll/PollComponent';

const LoggedInHomeScreenComponent = ({ }) => {
    
    const [polls, setPolls] = useState([]);

    useEffect(() => {
        const fetchData = async () => setPolls(await getAllPolls(true));
        fetchData();
    }, []);

    const list1 = polls.slice(0, polls.length / 3);
    const list2 = polls.slice(polls.length / 3, (2 * polls.length) / 3);
    const list3 = polls.slice((2 * polls.length) / 3, polls.length);

    return (
        <div>
            <div class="row">
            <div class="col">
                {list1.map(poll => <PollComponent key={poll.id} poll={poll}/>)}
            </div>
            <div class="col">
                {list2.map(poll => <PollComponent key={poll.id} poll={poll} />)}
            </div>
            <div class="col">
                {list3.map(poll => <PollComponent key={poll.id} poll={poll}/>)}
            </div>
            </div>
            <div className="bottom-container">
                <div className="bottom-notice p-3 align-items-center">
                    All out of polls! 🎉
                </div>
            </div>
        </div>
    );
}

export default LoggedInHomeScreenComponent;