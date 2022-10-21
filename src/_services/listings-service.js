import axios from "axios";

const API_BASE = (process.env.REACT_APP_API_BASE || 'http://localhost:4000/api');

export const updateListing = async (listing) => {
    const request_url = `${API_BASE}/listings`
    const response = await axios.put(request_url, listing,{withCredentials:true})
    if ( response.status === 200) {
        return response.data
    }
}

export const deleteListing = async (listing_id) => {
    const request_url = `${API_BASE}/listings/${listing_id}`
    const response = await axios.delete(request_url,{withCredentials:true});
    if ( response.status === 200 ){
        return response.data
    }

}

export const findAllListings = async () => {
    const request_url = `${API_BASE}/listings`

    const response = await axios.get(request_url,{withCredentials:true});
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}

export const findPriceHistoryByPaintingId = async (painting_id) => {
    const request_url = `${API_BASE}/listings/sold/byPaintingId/${painting_id}`
    const response = await axios.get(request_url,{withCredentials:true});
    if ( response.status === 200 ){
        return response.data;
    } else {
        return [];
    }
}

export const findAllActiveListings = async () => {
    const request_url = `${API_BASE}/listings`;
    const response = await axios.get(request_url,{withCredentials:true});
    if ( response.status === 200 ){
        return response.data;
    } else {
        return [];
    }
}

export const findListingsByPaintingId = async (painting_id) => {
    const request_url = `${API_BASE}/listings/byPaintingId/${painting_id}`
    const response = await axios.get(request_url,{withCredentials:true})
    if ( response.status === 200 ){
        return response.data;
    } else {
        return [];
    }
}

export const findListingsByOwnerId = async (owner_id) => {
    const request_url = `${API_BASE}/listings/byOwnerId/${owner_id}`
    const response = await axios.get(request_url,{withCredentials:true});
    if ( response.status === 200 ){
        return response.data;
    } else {
        return [];
    }
}

export const findListingsByArtistId = async (artist_id) => {
    const request_url = `${API_BASE}/listings/byArtistId/${artist_id}`
    const response = await axios.get(request_url,{withCredentials:true});
    if ( response.status === 200 ){
        return response.data;
    } else {
        return [];
    }
}

export const createListing = async (listing) => {
    // note that the date field is not provided here and will be set on the server for consistency
    const request_url = `${API_BASE}/listings`
    const response = await axios.post(request_url, listing,{withCredentials:true});
    if ( response.status === 200 ){
        return response.data;
    } else {
        return {};
    }

}