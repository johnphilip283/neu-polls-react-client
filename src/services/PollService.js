/**
 * Handles poll data access to the server.
 */

import {API_POLL_URL} from "../constants";

/**
* Retrieves all poll instances as an array of users.
*/
export const findAllPolls = async () => {
    const response = await fetch(API_POLL_URL)
    return await response.json()
}