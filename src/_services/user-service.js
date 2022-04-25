import axios from "axios";
const API_BASE = (process.env.REACT_APP_API_BASE || 'http://localhost:4000/api');
const SECURITY_API = `${API_BASE}/auth`;

export const updateUser = async (user) => {
    const response = await api.put(`${API_BASE}/users`, user);
    if ( response.status === 200 ){
        return response.data;
    }
}

export const printUser = async (user) => {
   await console.log(user)
}

// TODO do we need this?
const api = axios.create({
    withCredentials: true
});

export const signup = async ( user ) => {
    const response = await api.post(`${SECURITY_API}/signup`)
    return response.data;
}

export const login = async (credentials) => {
    const request_url = `${SECURITY_API}/login/${credentials}`
    const response = await axios.get(request_url)
    if ( response.status === 200 ) {
        return response.data;
    } else {
        return [];
    }
}
