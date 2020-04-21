import React, { useState, useEffect } from 'react';
import './comments.scss';
import { postComment, getCommentsForPoll, deleteComment, updateComment } from '../services/CommentsService';
import { Button, Modal, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Comment = ({ comment }) => {

    const { author, inserted_at, embed, comment: text } = comment;
    const { id, username } = author;

    return (
        <div className='comment p-3'>
            <a className='comment-author-name' href={`/profile/${id}`}>{username}</a> - 
            <span className='comment-time mb-1'> {new Date(inserted_at).toUTCString()}</span>
            <p className='comment-text mt-1'>{text}</p>
            {embed && <img src={embed}/>}
        </div>
    )
} 
const CommentsSection = ({ pid, history }) => {

    const [userComment, setUserComment] = useState('');
    const [comments, setComments] = useState([]);

    const [show, setShow] = useState(false);

    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);
    const commentPostHandler = e => setUserComment(e.target.value);

    const handleGifSearch = () => history.push(`/details/${pid}/search`);

    useEffect(() => {
        const fetchData = async () => setComments(await getCommentsForPoll(pid));
        fetchData();
    }, []);



    const submitComment = async () => {
        await postComment(pid, { embed: '', comment: userComment });
        setShow(false);
        setComments(await getCommentsForPoll(pid));
    };

    return (
        <div className='comments-section m-3 p-4'>
            <h3 className='comments-section-title'>Comments Section</h3>
            <div className='comments-container'>
                {comments && comments.map(comment => <Comment comment={comment}/>)}
            </div>
            <div className='m-3'></div>
            <button className="btn btn-primary" onClick={showModal}>
                Add comment!
            </button>
            <button className="btn btn-primary float-right" onClick={handleGifSearch}>
                Search for GIFs!
            </button>

            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" value={userComment} onChange={commentPostHandler} placeholder='Add a comment...'/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={submitComment}>
                    Post
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default withRouter(CommentsSection);