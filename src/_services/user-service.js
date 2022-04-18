import axios from "axios";
const API_BASE = (process.env.REACT_APP_API_BASE || 'http://localhost:4000/api');

export const printUser = async (user) => {
   await console.log(user)
}

export const login = async (credentials) => {
    const request_url = `${API_BASE}/login/${credentials}`
    const response = await axios.get(request_url)
    if ( response.status === 200 ) {
        return response.data;
    } else {
        return [];
    }
}
