import axios from "axios";
const API_BASE = (process.env.REACT_APP_API_BASE
    || 'http://localhost:4000/api');

// TODO do we need this?
const api = axios.create({
    withCredentials: true
});

export const deleteUser = async (user_id) => {
    const response = await axios.delete(`${API_BASE}/users/${user_id}`);
    return response.status
}

export const updateUser = async (user) => {
    const response = await api.put(`${API_BASE}/users`, user);
    if ( response.status === 200 ){
        return response.data;
    }
}


export const findAllUsers = async () => {
    const request_url = `${API_BASE}/users`
    const response = await axios.get(request_url)
    if (response.status === 200 ) {
        return response.data
    } else {
        return []
    }
}

export const findUserById = async (user_id) => {
    const request_url = `${API_BASE}/users/${user_id}`
    const response = await axios.get(request_url)
    if (response.status === 200 ) {
        return response.data
    } else {
        return []
    }
}
