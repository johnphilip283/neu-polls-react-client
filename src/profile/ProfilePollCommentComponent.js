import React, { useState, useEffect } from 'react';
import { findUserPolls } from '../services/ProfileService';
import HeadingComponent from '../header/HeadingComponent';
import { findPollById, deletePoll, updatePoll, voteForPoll } from '../services/PollService';
import PollComponent from '../poll/PollComponent';
import './profile.scss';

const ProfilePollCommentComponent = ({ userId, type }) => {

   const [polls, setPolls] = useState([]);
   const [user, setUser] = useState([]);

    useEffect(() => {

        if (type === 'poll') {
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
        }

        else if (type === 'comment') {
            const fetchData = async () => {
                findUserPolls(window.localStorage.getItem('token'), userId, true, true)
                    .then(result => {
                        setUser(result);
                        
                        result.comments.map(c => {
                            findPollById(c.poll_id)
                                .then(p => setPolls(prevState => ([...prevState, p])))
                        })
                    })
            };
            fetchData();
        }
        
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
                    <a href="/login">Login</a> to view this user's {(type === 'poll') ? "polls" : "comments on polls" } 
                    and gain full access to NEU Polls!
                </div>
            </div>
        )
    };


   return (
      <div class="container-home">
         <HeadingComponent/>

         <div>
         <h5 className='profile-polls-headline'>
             {(type === 'poll') ? 
             user.firstName + "'s Polls" : 
             user.firstName + "'s Comments" }
         </h5>

        {(type === 'comment') && 
        <span className='profile-comment-details'>Click on 'View Details' to see {user.firstName}'s comments on these polls!</span>
        }
            
        <div class="row">
            <div class="col">
                {list3.map(poll => <PollComponent key={poll.id} poll={poll} showButton={(type === 'poll') ? false : true}
                                                    viewingUser={user} deletePolls={deletePolls}
                                                    authorId={poll.author_id} updatePolls={updatePolls}/>)}
            </div>
            <div class="col">
                {list2.map(poll => <PollComponent key={poll.id} poll={poll} showButton={(type === 'poll') ? false : true}
                                                    viewingUser={user} deletePolls={deletePolls}
                                                    authorId={poll.author_id} updatePolls={updatePolls}
                                                    voteForPoll={voteForPoll} />)}
            </div>
            <div class="col">
                {list1.map(poll => <PollComponent key={poll.id} poll={poll} showButton={(type === 'poll') ? false : true}
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

export default ProfilePollCommentComponent;