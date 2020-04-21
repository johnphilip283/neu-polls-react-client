import React, { useState, useEffect } from 'react';
import { findPollById } from '../services/PollService';
import HeadingComponent from '../header/HeadingComponent';
import PollComponent from './PollComponent';
import CommentsSection from '../comments/CommentsSection';
import { deletePoll, updatePoll, voteForPoll, getVotesForPoll } from '../services/PollService';

const PollDetailComponent = ({ pid }) => {

    const [poll, setPoll] = useState({});
  
    useEffect(() => {
        const fetchData = async () => setPoll(await findPollById(pid));
        fetchData();
    }, []);

    return (
        <div>
            <HeadingComponent/>
            {poll.id && <PollComponent poll={poll} showButton={false}/>}
            <CommentsSection pid={pid}/>
        </div>
    );
}

export default PollDetailComponent;