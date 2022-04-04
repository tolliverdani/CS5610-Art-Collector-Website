import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const PAINTINGS_BY_ARTIST_EXT = "/paintings/byArtist"

export const findPaintingsByArtist = async (artist_id) => {
    const request_url = `${API_BASE}${PAINTINGS_BY_ARTIST_EXT}/${artist_id}`
    const response = await axios.get(request_url)
    if ( response.status === 200 ) {
        return response.data.data;
    } else {
        return [];
    }
}
