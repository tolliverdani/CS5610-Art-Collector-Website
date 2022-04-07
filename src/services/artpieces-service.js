import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const PAINTINGS_BY_ARTIST_EXT = "/paintings/byArtist"
const RANDOM_PAINTINGS = "/paintings/random"
const ARTIST_GENERAL_SEARCH = "/generalSearch/:search_term"
const ARTIST_DETAILS = "/artist/:search_term"

export const findPaintingsByArtist = async (artist_id) => {
    const request_url = `${API_BASE}${PAINTINGS_BY_ARTIST_EXT}/${artist_id}`
    const response = await axios.get(request_url)
    if ( response.status === 200 ) {
        return response.data.data;
    } else {
        return [];
    }
}

export const artistGeneralSearch = async (search_terms) => {
    const request_url = `${API_BASE}${ARTIST_GENERAL_SEARCH}/${search_terms}`
    const response = await axios.get(request_url)
    if ( response.status === 200 ) {
        return response.data.data;
    } else {
        return [];
    }
}

export const artistDetails = async (search_terms) => {
    const request_url = `${API_BASE}${ARTIST_DETAILS}/${search_terms}`
    const response = await axios.get(request_url)
    if ( response.status === 200 ) {
        return response.data;
    } else {
        return [];
    }
}

export const randomPaintings = async () => {
    const request_url = `${API_BASE}${RANDOM_PAINTINGS}`
    const response = await axios.get(request_url)
    if ( response.status === 200 ) {
        return response.data;
    } else {
        return [];
    }
}
