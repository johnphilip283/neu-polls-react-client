import { GIF_SEARCH_URL } from '../constants';

const jwt = window.localStorage.getItem('token') || '';

export const queryForGif = async (query, limit = 5, offset = 0) => {
    return await fetch(GIF_SEARCH_URL(query, limit, offset), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}