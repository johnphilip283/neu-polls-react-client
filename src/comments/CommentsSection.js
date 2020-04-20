import React, { useState, useEffect } from 'react';
import './comments.scss';

import { getComment, getCommentsForPoll, deleteComment, updateComment } from '../services/CommentsService';
import { Button, Modal, Form } from 'react-bootstrap';

const Comment = ({ comment }) => {

    return (
        <div className='comment p-3'>
            <a className='comment-author-name' href={`/profile/${comment.author.id}`}>{comment.author.username}</a> - 
            <span className='comment-time mb-1'>  {new Date(comment.inserted_at).toUTCString()}</span>
            <p className='comment-text mt-1'>{comment.comment}</p>
        </div>
    )
} 
const CommentsSection = ({ pid }) => {

    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchData = async () => setComments(await getCommentsForPoll(pid));
        fetchData();
    }, []);

    const submitComment = () => {};

    return (
        <div className='comments-section m-3 p-4'>
            <h3 className='comments-section-title'>Comments Section</h3>
            <div className='comments-container'>
                {comments && comments.map(comment => <Comment comment={comment}/>)}
            </div>
            <div className='m-3'></div>
            <Button variant="primary" onClick={handleShow}>
                Add comment!
            </Button>

            <Modal show={show} onHide={handleClose}>
                
                <Modal.Header closeButton/>

                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" placeholder='Add a comment...'/>
                    </Form.Group>
                </Modal.Body>
                <div className='mx-auto'>or</div>
                
                <Modal.Body>
                    <Form.Label>Search for a GIF!</Form.Label>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Search for GIFs!"/>
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

export default CommentsSection;