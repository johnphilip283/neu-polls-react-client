import React, { useState, useEffect } from 'react';
import { findPollById } from '../services/PollService';
import HeadingComponent from '../header/HeadingComponent';
import PollComponent from './PollComponent';

import { deletePoll, updatePoll, voteForPoll, getVotesForPoll } from '../services/PollService';
import { getComment, getCommentsForPoll, deleteComment, updateComment } from '../services/CommentsService';

const PollDetailComponent = ({ pid }) => {

    const [poll, setPoll] = useState({});

    useEffect(() => {
        const fetchData = async () => setPoll(await findPollById(pid));
        fetchData();
    }, []);

    return (
        <div>
            <HeadingComponent/>
            {poll.id && <PollComponent poll={poll}/>}
        </div>
    );
}

export default PollDetailComponent;