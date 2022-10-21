import axios from "axios";

const API_BASE = (process.env.REACT_APP_API_BASE || 'http://localhost:4000/api');
const COLLECTIONS_API = API_BASE + "/collection"

export const printCollection = async (user_id) => {
    const request_url = `${COLLECTIONS_API}/${user_id}`;
    await axios.get(request_url);
}

export const updateCollection = async (collection) => {
    return axios.put(COLLECTIONS_API, collection,{withCredentials:true});
}

export const findUserCollection = async (user_id) => {
    const request_url = `${COLLECTIONS_API}/${user_id}`
    const response = await axios.get(request_url,{withCredentials:true});
    if (response.status === 200) {
        return response.data
    }
}

export const addToUserCollection = async (user_id, item_id) => {
    const request_url = `${COLLECTIONS_API}/add/${user_id}`
    const response = await axios.put(request_url, item_id,{withCredentials:true});
    if (response.status === 200) {
        return response.data
    }
}

export const removeFromUserCollection = async (user_id, item_id) => {
    const request_url = `${COLLECTIONS_API}/remove/${user_id}/${item_id}`
    const response = await axios.delete(request_url,{withCredentials:true});
    if (response.status === 200) {
        return response.status
    }
}