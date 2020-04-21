import { ALL_POLLS_URL, ANON_POLL_URL, VOTE_POLL_URL, POLL_URL, DELETE_POLL_URL, BASE_POLLS_URL } from "../constants";

const jwt = window.localStorage.getItem('token') || '';

export const voteForPoll = async (pid, option) => {
    return await fetch(VOTE_POLL_URL(pid), {
        method: 'POST',
        body: JSON.stringify(option),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}

export const getAnonPolls = async () => {
    return await fetch(ANON_POLL_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}

export const getAllPolls = async (showAuthors = false) => {
    return await fetch(ALL_POLLS_URL(showAuthors), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}

export const getVotesForPoll = async pid => {
    return await fetch(POLL_URL(pid), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}

export const findPollById = async pid => {
    return await fetch(POLL_URL(pid), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}

export const createPoll = async poll => {
    return await fetch(BASE_POLLS_URL, {
        method: 'POST',
        body: JSON.stringify(poll),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}

export const deletePoll = async pid => {
    return await fetch(DELETE_POLL_URL(pid), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}

export const updatePoll = async (pid, poll) => {
    return await fetch(POLL_URL(pid), {
        method: 'PUT',
        body: JSON.stringify(poll),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}

