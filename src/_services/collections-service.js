import axios from "axios";
const API_BASE = (process.env.REACT_APP_API_BASE || 'http://localhost:4000/api');
const COLLECTIONS_API = API_BASE + "/collection"

export const printCollection = async ( user_id ) => {
    const request_url = `${COLLECTIONS_API}/${user_id}`;
    const response = axios.get(request_url);
    console.log(response.data);
}

export const updateCollection = async ( collection ) => {
    const response = axios.put(COLLECTIONS_API, collection);
    return response;
}

export const findUserCollection = async ( user_id ) => {
    const request_url = `${COLLECTIONS_API}/${user_id}`
    const response = await axios.get(request_url);
    if ( response.status === 200 ){
        return response.data
    }
}

export const addToUserCollection = async ( user_id, item_to_add ) => {
    const request_url = `${COLLECTIONS_API}/add/${user_id}`
    const response = await axios.put(request_url, item_to_add);
    if ( response.status === 200 ){
        return response.data
    }
}