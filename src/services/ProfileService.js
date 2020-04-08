/**
 * Handles user profile data access to the server.
 */

import { API_USER_URL } from "../constants";

// API call for profile of logged-in user
export const findUserProfile = async jwt => {
    // TODO: need endpoint from Jacob
    return await fetch('', {
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
    const response = await fetch(API_USER_URL);
    return await response.json();
}

/**
* Retrieves a user instance that matches the id parameter.
* 
* @param {*} userId userid corresponding to desired user object
*/
export const findUserById = async (jwt, userId) => {
    // TODO: need endpoint from Jacob
    return await fetch(`${API_USER_URL}/${userId}`, {
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
export const updateUser = async (userId, user) => {
    return await fetch(`${API_USER_URL}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}