import { ALL_COMMENTS_URL, COMMENT_URL, COMMENTS_FOR_POLL } from '../constants';

export const getAllComments = async () => {
    return await fetch(ALL_COMMENTS_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`
        }
    }).then(res => res.json());
}

export const getComment = async cid => {
    return await fetch(COMMENT_URL(cid), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`
        }
    }).then(res => res.json());
}

export const getCommentsForPoll = async pid => {
    return await fetch(COMMENTS_FOR_POLL(pid), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`
        }
    }).then(res => res.json());
}

export const postComment = async (pid, comment) => {
    return await fetch(COMMENTS_FOR_POLL(pid), {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`
        }
    }).then(res => res.json());
}

export const deleteComment = async cid => {
     return await fetch(COMMENT_URL(cid), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`
        }
    }).then(res => res.json());
}

export const updateComment = async (cid, body) => {
     return await fetch(COMMENT_URL(cid), {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`
        }
    }).then(res => res.json());
}