import axios from 'axios';

const API_BASE = (process.env.REACT_APP_API_BASE || 'http://localhost:4000/api');
const COMMENTS_API = `${API_BASE}/comments`;

export const createComment = async (comment) => {
    const response = await axios.post(COMMENTS_API, comment,{withCredentials:true});
    return response.data;
}

export const findAllComments = async () => {
    const response = await axios.get(COMMENTS_API,{withCredentials:true});
    return response.data;
}

export const findPaintingComments = async (painting_id) => {
    const request_url = `${COMMENTS_API}/painting/${painting_id}`
    const response = await axios.get(request_url,{withCredentials:true});
    if (response.status === 200) {
        return response.data
    }
}

export const findArtistComments = async (artist_id) => {
    const request_url = `${COMMENTS_API}/artist/${artist_id}`
    const response = await axios.get(request_url,{withCredentials:true});
    if (response.status === 200) {
        return response.data
    }
}

export const deleteComment = async (comment_id) => {
    const response = await axios.delete(`${COMMENTS_API}/${comment_id}`,{withCredentials:true});
    return response.data;
}

export const updateComment = async (comment) => {
    const response = await axios.put(`${COMMENTS_API}/${comment._id}`, comment,{withCredentials:true});
    return response.data;
}
