export const BASE_URL = 'https://sleepy-savannah-14905.herokuapp.com/api/';
export const BASE_POLLS_URL = `${BASE_URL}polls`;

export const ANON_USER_URL = `${BASE_URL}anon/users`;

export const ALL_USERS_URL = `${BASE_URL}users`;
export const USER_DATA_URL = (uid, comments = false, polls = false) => `${BASE_URL}users/${uid}?showcomments=${comments}&showpolls=${polls}`;

export const SIGN_IN_URL = `${ALL_USERS_URL}/signin`;

export const ALL_POLLS_URL = (authors = true) => `${BASE_POLLS_URL}?showauthor=${authors}`;
export const POLL_URL = (pid, authors = true) => `${BASE_POLLS_URL}/${pid}?showauthor=${authors}`;
export const ANON_POLL_URL = `${BASE_URL}anon/polls`;
export const VOTE_POLL_URL = pid => `${BASE_URL}polls/${pid}/votes`;
export const DELETE_POLL_URL = pid => `${BASE_URL}polls/${pid}`;

export const ALL_COMMENTS_URL = `${BASE_URL}comments`;
export const COMMENT_URL = cid => `${ALL_COMMENTS_URL}/${cid}`;
export const COMMENTS_FOR_POLL = pid => `${BASE_POLLS_URL}/${pid}/comments`;

export const GIF_SEARCH_URL = (query, limit, offset) => `${BASE_URL}gifs/search?query=${query}&limit=${limit}&offset=${offset}`;

export const PROFILE_URL = `${BASE_URL}profile`;