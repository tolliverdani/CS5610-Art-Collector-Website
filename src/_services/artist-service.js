import axios from 'axios';
const API_BASE = (process.env.REACT_APP_API_BASE || 'http://localhost:4000/api');
const UPDATED_ARTISTS = "/artists/updated"

export const updatedArtists = async () => {
    const request_url = `${API_BASE}${UPDATED_ARTISTS}`
    const response = await axios.get(request_url,{withCredentials:true})
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}