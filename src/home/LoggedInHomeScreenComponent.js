import React, { useState, useEffect } from 'react';
import { getAllPolls, deletePoll, updatePoll, voteForPoll, findPollById } from '../services/PollService';
import PollComponent from '../poll/PollComponent';
import { findUserProfile } from '../services/ProfileService';

const LoggedInHomeScreenComponent = ({ }) => {
    
    const [polls, setPolls] = useState([]);

    // admin delete capabilities
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchViewerData = async () => setUser(await findUserProfile(window.localStorage.getItem('token')));
        fetchViewerData();

    }, []);

    useEffect(() => {
        const fetchData = async () => setPolls(await getAllPolls(true));
        fetchData();
    }, []);

    const deletePolls = (pid) =>
        deletePoll(pid)
            .then(result => {
                setPolls(polls.filter(p => p.id !== pid))
            })

    const updatePolls = (pid, poll) => 
        updatePoll(pid, poll)
            .then(result => {
                setPolls(polls.map(p => (p.id === pid ? Object.assign(p, result) : p)));
            })

    const votePolls = (pid, vote) =>
        voteForPoll(pid, vote)
            .then(newVote => {
                findPollById(newVote.poll_id)
                    .then(updatedPoll =>
                        setPolls(polls.map(p => (p.id === pid ? Object.assign(p, updatedPoll) : p))))
            })

    const list1 = polls.slice(0, polls.length / 3);
    const list2 = polls.slice(polls.length / 3, (2 * polls.length) / 3);
    const list3 = polls.slice((2 * polls.length) / 3, polls.length);

    const columns = [list1, list2, list3];

    return (
        <div>
            <div class="row">

                {columns.map(list => <div class="col">
                                        {list.map(poll => <PollComponent key={poll.id} poll={poll} showButton={true}
                                                                            viewingUser={user}
                                                                            deletePolls={deletePolls}
                                                                            authorId={poll.author_id}
                                                                            updatePolls={updatePolls}
                                                                            voteForPoll={votePolls}/>)}
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