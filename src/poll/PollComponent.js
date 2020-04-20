import React, { useState, useEffect } from 'react';
import './poll.scss';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Option = ({ option, optionHandler, editing, newOptions, idx, setNewOptions}) => {

    return (
        <div class="option">
            {editing ?
            <input type="text" onChange={(e) => {newOptions[idx] = e.target.value;  
                                                setNewOptions(newOptions);}}
                    className="form-control" id={option} name="option" placeholder={newOptions[idx]}/>
            :
            <React.Fragment>
                <input type="radio" onClick={optionHandler} className="mr-2" id={option} name="option" value={option}/>
                <div class="progress option-bar">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{option}</div>
                </div>
            </React.Fragment>
            }
        </div>
    );
}

const PollComponent = ({ poll, history, showButton, viewingUser, deletePolls, authorId, updatePolls }) => {

    const jwt = window.localStorage.getItem('token') || '';

    // updating polls
    const [newPollText, setNewPollText] = useState(poll.text);
    const [newOptions, setNewOptions] = useState(poll.options)
    const [editing, setEditing] = useState(false);

    // TODO: IMPLEMENT VOTING
    const [selectedOption, setSelectedOption] = useState('');
    
    const { firstName, lastName, role } = poll.author;

    const optionHandler = e => setSelectedOption(e.target.value);

    const viewDetailsHandler = () => history.push(jwt ? `/details/${poll.id}` : `/login`);
    
    return (
        <div className="poll m-3">
            <div className="inner-content p-4">
                <p className='mb-0'>
                    {firstName ? <a className='poll-author-name' href={`/profile/${authorId}`}>{firstName + ' ' + lastName}</a> : 'Anonymous'}
                    <div className="poll-changing-btns">
                        {editing &&
                        <React.Fragment>
                            <FontAwesomeIcon className='poll-edit-btn' icon={faCheck} 
                                            onClick={() => {updatePolls(poll.id, {'text': newPollText, 'options': newOptions})
                                                            setEditing(false);}} />
                            <FontAwesomeIcon className='poll-delete-btn' icon={faTimes} onClick={() => setEditing(false)} />
                        </React.Fragment>
                        }

                        {((viewingUser && ((viewingUser.role === 'admin') || (viewingUser.id === authorId))) && !editing ) &&
                            <React.Fragment>
                                <FontAwesomeIcon className='poll-edit-btn' icon={faPencilAlt} onClick={() => setEditing(true)} />
                                <FontAwesomeIcon icon={faTrash} className='poll-delete-btn' onClick={() => deletePolls(poll.id)} />
                            </React.Fragment>
                        }
                    </div>
                </p>
                <div className="poll-byline mt-1">
                    <span className="poll-role mr-1">{(role === 'user' || !role) ? 'Member' : 'Admin'}</span>-
                    <span className='poll-time ml-1'>{new Date(poll.inserted_at).toDateString()}</span>
                </div>
                {editing ?

                <input type="text" className="form-control" placeholder={newPollText}
                        onChange={(e) => setNewPollText(e.target.value)} />
                :
                <p className='poll-question-text mt-2 mb-2'>{poll.text}</p>
                }
                <form className="options">
                    {poll && poll.options && poll.options.map((option, idx) => <Option optionHandler={optionHandler} key={idx} idx={idx} 
                                                                                        option={option} editing={editing} newOptions={newOptions}
                                                                                        setNewOptions={setNewOptions}/>)}
                </form>
            </div>
            { showButton && <button className="details-link" onClick={viewDetailsHandler}>
                                    View details
                            </button>
            }
            
        </div>
    );
}

export default withRouter(PollComponent);