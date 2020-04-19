import { GIF_SEARCH_URL } from '../constants';

const jwt = window.localStorage.getItem('token') || '';

const queryForGif = async query => {
    return await fetch(GIF_SEARCH_URL(query), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}