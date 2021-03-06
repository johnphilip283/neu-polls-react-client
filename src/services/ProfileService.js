/**
 * Handles user profile data access to the server.
 */
import { ALL_USERS_URL, PROFILE_URL, USER_DATA_URL, ANON_USER_URL } from "../constants";

const jwt = window.localStorage.getItem('token') || '';

// API call for profile of logged-in user
export const findUserProfile = async jwt => {

    return await fetch(PROFILE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(response => response.json());
}

/**
* Retrieves all user instances as an array of users.
*/
export const findAllUsers = async () => {
    const response = await fetch(ALL_USERS_URL);
    return await response.json();
}

/**
* Retrieves a user instance that matches the id parameter.
* 
* @param {*} userId userid corresponding to desired user object
*/
export const findUserById = async (jwt, userId) => {

    return await fetch(`${ALL_USERS_URL}/${userId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(response => response.json());
}

export const findUserPolls = async (jwt, userId, comments = false, polls = true)=> {
    return await fetch(USER_DATA_URL(userId, comments, polls), {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(response => response.json());
}

/**
* Updates the user instance whose id matches the id parameter. 
* Updates the instance with values in user parameter.
* 
* @param {*} userId userid corresponding to desired user object
* @param {*} user desired userobject to update
*/
export const updateUser = async (userId, user, jwt) => {
    return await fetch(`${ALL_USERS_URL}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(response => response.json());
}

/**
* Retrieves a user instance that matches the id parameter.
* 
* @param {*} userId userid corresponding to desired user object
*/
export const anonFindUserById = async (userId) => {

    return await fetch(`${ANON_USER_URL}/${userId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.json());
}

// delete user
export const deleteUser = async (userId) => {
    return await fetch(`${ALL_USERS_URL}/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json());
}