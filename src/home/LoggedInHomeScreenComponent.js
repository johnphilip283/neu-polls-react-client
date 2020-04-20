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

    const columns = [list1, list2, list3];

    return (
        <div>
            <div class="row">

                {columns.map(list => <div class="col">
                                        {list.map(poll => <PollComponent key={poll.id} poll={poll} showButton={true}/>)}
                                    </div>
                            )}
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