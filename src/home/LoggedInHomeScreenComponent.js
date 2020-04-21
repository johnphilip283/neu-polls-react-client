import React, { useState, useEffect } from 'react';

import { getAllPolls, deletePoll, updatePoll, voteForPoll, findPollById, createPoll } from '../services/PollService';

import { findUserProfile } from '../services/ProfileService';

import PollComponent from '../poll/PollComponent';
import { Modal, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LoggedInHomeScreenComponent = ({ history }) => {
    
    const [polls, setPolls] = useState([]);
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    const [question, setQuestion] = useState('');
    const [optionString, setOptionString] = useState('');

    const handleOptions = e => setOptionString(e.target.value);
    const handleQuestion = e => setQuestion(e.target.value);

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
            
    const submitPoll = async () => {
        let options = optionString.split(',');
        await createPoll({ text: question, options });
        window.location.reload();
    }

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

            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Poll</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control type="text" value={question} onChange={handleQuestion} placeholder="What's on your mind?"/>
                        <div className="mb-3"></div>
                        <Form.Control as="textarea" rows="3" value={optionString} onChange={handleOptions} placeholder='Provide a comma separated list of poll options ex) option1,option2,option3...'/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-primary' onClick={submitPoll}>
                        Post
                    </button>
                </Modal.Footer>
            </Modal>
            
            <div className="bottom-container">
                <div className="bottom-notice p-3 align-items-center">
                    All out of polls! 🎉
                </div>
            </div>

            <button class="float-right add-poll" onClick={showModal}>
                <FontAwesomeIcon icon={faPlusCircle} />
            </button>
        </div>
    );
}

export default withRouter(LoggedInHomeScreenComponent);