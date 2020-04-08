import { API_USER_URL } from "../constants";

// Registration (creating user)
export const registerUser = async user => {
    return await fetch(API_USER_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

// Logging in
export const loginUser = async (username, password) => {
    
}