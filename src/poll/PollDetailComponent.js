import React, { useState, useEffect } from 'react';
import { findPollById } from '../services/PollService';
import HeadingComponent from '../header/HeadingComponent';
import PollComponent from './PollComponent';
import CommentsSection from '../comments/CommentsSection';

const PollDetailComponent = ({ pid }) => {

    const jwt = window.localStorage.getItem('token');

    const [poll, setPoll] = useState({});
  
    useEffect(() => {
        const fetchData = async () => setPoll(await findPollById(pid));
        fetchData();
    }, []);

    if (!jwt) {
        return (
            <div>
                <HeadingComponent/>
                <div class="alert alert-danger anonymous-profile-notif" role="alert">
                        <a href="/login">Login</a> to view details on polls
                        and gain full access to NEU Polls!
                </div>
            </div>
        )
    }

    return (
        <div>
            <HeadingComponent/>
            {poll.id && <PollComponent poll={poll} showButton={false}/>}
            <CommentsSection pid={pid}/>
        </div>
    );
}

export default PollDetailComponent;