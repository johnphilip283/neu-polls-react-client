import React, { useState, useEffect } from 'react';
import { findUserPolls } from '../../services/ProfileService';
import HeadingComponent from '../../header/HeadingComponent';
import PollComponent from '../../poll/PollComponent';
import '../profile.scss';
import { deletePoll, updatePoll } from '../../services/PollService';

const ProfilePollComponent = ({ userId }) => {

   const [polls, setPolls] = useState([]);
   const [user, setUser] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            findUserPolls(window.localStorage.getItem('token'), userId)
                .then(result => {
                    const author = {'firstName': result.firstName, 'lastName': result.lastName, 'role': result.role}
                    result.polls.map(p => p['author'] =  author)

                    setPolls(result.polls);
                    setUser(result);
                })
        };
        
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
            console.log(result);
            setPolls(polls.map(p => (p.id === pid ? Object.assign(p, result) : p)));
        })

    const list1 = polls.slice(0, polls.length / 3);
    const list2 = polls.slice(polls.length / 3, (2 * polls.length) / 3);
    const list3 = polls.slice((2 * polls.length) / 3, polls.length);


    if (!window.localStorage.getItem('token')) {
        return(
            <div class="container-home">
                <HeadingComponent/>
                <div class="alert alert-danger anonymous-profile-notif" role="alert">
                    <a href="/login">Login</a> to view this user's polls 
                    and gain full access to NEU Polls!
                </div>
            </div>
        )
    };


   return (
      <div class="container-home">
         <HeadingComponent/>

         <div>
         <h5 className='profile-polls-headline'>{user.firstName + "'s Polls"}</h5>
            <div class="row">
            <div class="col">
                {list3.map(poll => <PollComponent key={poll.id} poll={poll} showButton={false}
                                                    viewingUser={user} deletePolls={deletePolls}
                                                    authorId={poll.author_id} updatePolls={updatePolls}/>)}
            </div>
            <div class="col">
                {list2.map(poll => <PollComponent key={poll.id} poll={poll} showButton={false}
                                                    viewingUser={user} deletePolls={deletePolls}
                                                    authorId={poll.author_id} updatePolls={updatePolls} />)}
            </div>
            <div class="col">
                {list1.map(poll => <PollComponent key={poll.id} poll={poll} showButton={false}
                                                    viewingUser={user} deletePolls={deletePolls}
                                                    authorId={poll.author_id} updatePolls={updatePolls}/>)}
            </div>
            </div>
            <div className="bottom-container">
                <div className="bottom-notice p-3 align-items-center">
                    All out of polls! 🎉
                </div>
            </div>
        </div>

      </div>
       
   )
};

export default ProfilePollComponent;