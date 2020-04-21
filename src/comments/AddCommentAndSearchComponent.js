import React, { useState, useEffect } from 'react';
import HeadingComponent from '../header/HeadingComponent';
import { withRouter } from 'react-router-dom';
import { queryForGif } from '../services/GifService';
import { Form } from 'react-bootstrap';
import { postComment } from '../services/CommentsService';
import { faSync, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GifListComponent from '../gifs/GifListComponent';
import GifDescriptionComponent from '../gifs/GifDescriptionComponent';

const AddCommentAndSearchComponent = ({ pid, location, history }) => {

    const jwt = window.localStorage.getItem('token');

    const searchResult = new URLSearchParams(location.search).get('query') || '';

    const [userComment, setUserComment] = useState('');
    const [gifQuery, setGifQuery] = useState(searchResult);
    const [searched, setSearched] = useState(true);
    const [gifs, setGifs] = useState([]);
    const [selectedGif, setSelectedGif] = useState(null);
    const [limit, setLimit] = useState(5);
    const [offset, setOffset] = useState(0);

    const gifQueryHandler = e => setGifQuery(e.target.value);
    const gifSelectHandler = gif => e => setSelectedGif(gif);
    const limitHandler = e => setLimit(e.target.value);

    const gifSearchHandler = () => setSearched(false);
    
    useEffect(() => {
        const fetchGifs = async () => {
            if (searchResult) {
                const res = await queryForGif(gifQuery, limit, offset);
                setSearched(true);
                setGifs(res.data);
                return;
            }
            if (!gifQuery || searched) {
                return;
            }
            const res = await queryForGif(gifQuery, limit, offset);
            setGifs(res.data);
            setSearched(true);
        }
        fetchGifs();
    }, [gifQuery, searched, offset]);

    const submitComment = async () => {

        let body = { comment: userComment };

        if (selectedGif) {
            body.embed = selectedGif.images.fixed_width.url;
        }

        await postComment(pid, body);
        history.push(`/details/${pid}`);
    };

    const refreshFeedHandler = () => {
        setSearched(false);
        setOffset(offset + limit)
    };

    const commentHandler = e => setUserComment(e.target.value);

    if (!jwt) {
        return (
            <div>
                <HeadingComponent/>
                <div class="alert alert-danger anonymous-profile-notif" role="alert">
                        <a href="/login">Login</a> to view details on polls, post GIFs,
                        and gain full access to NEU Polls!
                </div>
            </div>
        )
    }
    
    return (
        <>
            <HeadingComponent/>
            <div className="container-fluid">
                <label>Add a comment!</label>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control as='textarea' rows="3" value={userComment} onChange={commentHandler} placeholder="Let the people know what you're thinking!"/>
                </Form.Group>
                <div className='row mt-3'>
                    <div className='col'>
                        <label>Search for a GIF!</label>
                        <input type='text' className='form-control' value={gifQuery} onChange={gifQueryHandler} placeholder='GIF search terms...'/>
                    </div>
                    <div className='col'>
                        <label>Number of results</label>
                        <input type='number' className='form-control' value={limit} onChange={limitHandler}/>
                    </div>
                </div>
                <div class="d-flex flex-row mt-3">
                    <button type='button' className='btn btn-primary m-2' onClick={gifSearchHandler}>
                        Search
                    </button>
                    <button type='button' className='btn btn-primary m-2' onClick={refreshFeedHandler}>
                        <FontAwesomeIcon icon={faSync}/> Refresh feed
                    </button>
                </div>
                <div className='row'>
                    <div className='col ml-2'>
                        <GifListComponent gifs={gifs} gifSelectHandler={gifSelectHandler}/>
                    </div>
                    <div className='col'>
                        <div className='text-center img-responsive preview'>
                            {selectedGif && <GifDescriptionComponent gif={selectedGif}/>}
                        </div>
                    </div>
                </div>
                <button class="float-right add-comment btn btn-primary" onClick={submitComment}>
                    Submit Comment <div className='big-icon'><FontAwesomeIcon icon={faPlusCircle} /></div>
                </button>
            </div>
        </>
    );
}

export default withRouter(AddCommentAndSearchComponent);