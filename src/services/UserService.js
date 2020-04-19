import { ALL_USERS_URL, SIGN_IN_URL } from "../constants";

// Registration (creating user)
export const registerUser = async user => {

    if (!user.dob) {
        return { errors: 'No date of birth given!'};
    }

    let [year, month, day] = user.dob.split("-");

    const copy = {...user, dob: `${month}/${day}/${year}`};

    return await fetch(ALL_USERS_URL, {
        method: 'POST',
        body: JSON.stringify(copy),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

// Logging in
export const loginUser = async (username, password) => {
    return await fetch(SIGN_IN_URL, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
         headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}
