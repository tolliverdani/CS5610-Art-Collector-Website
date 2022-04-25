import axios from "axios";

const API_BASE = (process.env.REACT_APP_API_BASE || 'http://localhost:4000/api');

export const findOffersByPaintingId = async (painting_id) => {
    const request_url = `${API_BASE}/offers/byPaintingId/${painting_id}`
    const response = await axios.get(request_url)
    if ( response.status === 200 ){
        return response.data;
    } else {
        return [];
    }
}

export const findOffersByArtistId = async (artist_id) => {
    const request_url = `${API_BASE}/offers/byPaintingId/${artist_id}`
    const response = await axios.get(request_url)
    if ( response.status === 200 ){
        return response.data;
    } else {
        return [];
    }
}

export const findOffersBySellerId = async (owner_id) => {
    const request_url = `${API_BASE}/offers/bySellerId/${owner_id}`
    const response = await axios.get(request_url);
    if ( response.status === 200 ){
        return response.data;
    } else {
        return [];
    }
}

export const findOffersByBidderId = async (user_id) => {
    const request_url = `${API_BASE}/offers/byBidderId/${user_id}`
    const response = await axios.get(request_url);
    if ( response.status === 200 ){
        return response.data;
    } else {
        return [];
    }
}

export const createOffer = async (offer) => {
    // note that the date field is not provided here and will be set on the server for consistency
    const request_url = `${API_BASE}/offers`
    const response = await axios.post(request_url, offer);
    if ( response.status === 200 ){
        return response.data;
    } else {
        return {};
    }

}

export const approveOffer = async (offer) => {
    // note that the date field is not provided here and will be set on the server for consistency
    const request_url = `${API_BASE}/offers/approve`
    const response = await axios.put(request_url, offer);
    if ( response.status === 200 ){
        // this should be just a {transaction_id: string}
        return response.data;
    } else {
        return {};
    }

}

export const rejectOffer = async (offer) => {
    // note that the date field is not provided here and will be set on the server for consistency
    const request_url = `${API_BASE}/offers/reject`
    const response = await axios.put(request_url, offer);
    if ( response.status === 200 ){
        return 200;
    } else {
        return 400;
    }

}