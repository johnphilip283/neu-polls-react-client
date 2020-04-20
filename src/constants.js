export const BASE_URL = 'https://sleepy-savannah-14905.herokuapp.com/api/';

export const ANON_USER_URL = `${BASE_URL}anon/users`;

export const ALL_USERS_URL = `${BASE_URL}users`;
export const USER_DATA_URL = (uid, comments = false, polls = false) => `${BASE_URL} `;

export const SIGN_IN_URL = `${ALL_USERS_URL}/signin`;

export const ALL_POLLS_URL = (authors = true) => `${BASE_URL}polls?showauthor=${authors}`;
export const POLL_URL = (pid, authors = true) => `${BASE_URL}polls/${pid}?showauthor=${authors}`;
export const ANON_POLL_URL = `${BASE_URL}anon/polls`;
export const VOTE_POLL_URL = pid => `${POLL_URL(pid)}/votes`;

export const ALL_COMMENTS_URL = `${BASE_URL}comments`;
export const COMMENT_URL = cid => `${ALL_COMMENTS_URL}/${cid}`;
export const COMMENTS_FOR_POLL = pid => `${BASE_URL}polls/${pid}/comments`;

export const GIF_SEARCH_URL = query => `${BASE_URL}gifs/${query}`;

export const PROFILE_URL = `${BASE_URL}profile`;

