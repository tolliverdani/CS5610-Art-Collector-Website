import axios from 'axios';
const API_BASE = (process.env.REACT_APP_API_BASE || 'http://localhost:4000/api');
const PAINTINGS_BY_ARTIST_EXT = "/paintings/byArtist"
const RANDOM_PAINTINGS = "/paintings/random"
const ARTIST_GENERAL_SEARCH = "/paintings/generalSearch"
const PAINTING_GENERAL_SEARCH = "/paintings/artistSearch"
const PAINTING_DETAILS = "/paintings/paintingDetails"
const ARTIST_DETAILS = "/artist"
const UPDATED_ARTISTS = "/artists/updated"

export const artistGeneralSearch = async(search_terms) => {
    const request_url = `${API_BASE}${PAINTING_GENERAL_SEARCH}/${search_terms}`;
    const response = await axios.get(request_url,{withCredentials:true});
    if ( response.status === 200 ){
        return response.data;
    } else {
        return [];
    }
}

export const findPaintingsByArtist = async (artist_id, pagination_token = "") => {
    let request_url = `${API_BASE}${PAINTINGS_BY_ARTIST_EXT}/${artist_id}`

    // If an optional pagination token has been added, append it to the url
    if ( pagination_token !== "" ) request_url = request_url + `/${pagination_token}`

    const response = await axios.get(request_url,{withCredentials:true})
    if ( response.status === 200 ) {
        return response.data;
    } else {
        return [];
    }
}

export const generalSearch = async (search_terms) => {
    const request_url = `${API_BASE}${ARTIST_GENERAL_SEARCH}/${search_terms}`
    const response = await axios.get(request_url,{withCredentials:true})
    if ( response.status === 200 ) {
        return response.data;
    } else {
        return [];
    }
}

export const artistDetails = async (search_terms) => {
    const request_url = `${API_BASE}${ARTIST_DETAILS}/${search_terms}`
    try {
        const response = await axios.get(request_url,{withCredentials:true})
        if ( response.status === 200 ) {
            return response.data;
        } else {
            return [];
        }
    } catch (e) {
        return {"OriginalArtistName": "artist_not_found"}
    }

}

export const paintingDetails = async (painting_id) => {
    const request_url = `${API_BASE}${PAINTING_DETAILS}/${painting_id}`
    const response = await axios.get(request_url,{withCredentials:true})
    // The styles, media, and genre all come back as lists, so adding a ", " for visual effect
    const response_as_string = {...response.data, media: response.data.media.join(", "), genres: response.data.genres.join(", "), styles: response.data.styles.join(", ")}
    if ( response.status === 200 ) {
        return response_as_string;
    } else {
        return [];
    }
}

export const randomPaintings = async () => {
    const request_url = `${API_BASE}${RANDOM_PAINTINGS}`
    const response = await axios.get(request_url,{withCredentials:true})
    if ( response.status === 200 ) {
        return response.data;
    } else {
        return [];
    }
}

export const updatedArtists = async () => {
    const request_url = `${API_BASE}${UPDATED_ARTISTS}`
    const response = await axios.get(request_url,{withCredentials:true})
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}