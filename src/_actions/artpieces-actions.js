import * as service from "../_services/artpieces-service";

export const FIND_PAINTINGS_BY_ARTIST = 'FIND_PAINTINGS_BY_ARTIST';
export const GENERAL_SEARCH = 'GENERAL_SEARCH';
export const ARTIST_GENERAL_SEARCH = 'ARTIST_GENERAL_SEARCH';
export const RANDOM_PAINTINGS = "RANDOM_PAINTINGS";
export const ARTIST_DETAILS = 'ARTIST_DETAILS';
export const PAINTING_DETAILS = 'PAINTING_DETAILS';
export const UPDATED_ARTISTS = 'UPDATED_ARTISTS';
export const FIND_MORE_PAINTINGS_BY_ARTIST = 'FIND_MORE_PAINTINGS_BY_ARTIST';

export const findPaintingsByArtist = async (dispatch, artist_id, pagination_token = "") => {

    try {
        const paintings_by_artist = await service.findPaintingsByArtist(artist_id, pagination_token);
        // if there is no pagination token, we can treat this as a fresh call and replace the state
        if (pagination_token === "") {
            dispatch({
                type: FIND_PAINTINGS_BY_ARTIST,
                paintings_by_artist: paintings_by_artist
            })
        }
        // otherwise, the pagination token means we want to append to the state
        else {
            dispatch({
                type: FIND_MORE_PAINTINGS_BY_ARTIST,
                paintings_by_artist: paintings_by_artist
            })
        }
    } catch (e) {

    }
}

export const generalSearch = async (dispatch, artist) => {
    try {
        const general_search = await service.generalSearch(artist);
        if (general_search.length !== 0) {
            dispatch({
                type: GENERAL_SEARCH,
                general_search: general_search
            })
        }
    } catch (e) {

    }
}

export const artistGeneralSearch = async (dispatch, search_term) => {
    try {
        const artist_general_search = await service.artistGeneralSearch(search_term);
        if (artist_general_search.length !== 0) {
            dispatch(
                {
                    type: ARTIST_GENERAL_SEARCH,
                    artist_general_search: artist_general_search
                }
            )
        }
    } catch (e) {

    }
}

export const paintingDetails = async (dispatch, painting_id) => {
    try {
        const painting_details = await service.paintingDetails(painting_id);
        dispatch({
            type: PAINTING_DETAILS,
            painting_details
        })
    } catch (e) {

    }
}

export const artistDetails = async (dispatch, artist) => {
    try {
        const artist_details = await service.artistDetails(artist);
        dispatch({
            type: ARTIST_DETAILS,
            artist_details: artist_details
        })
    } catch (e) {

    }
}

export const updatedArtists = async (dispatch) => {
    try {
        const updated_artists = await service.updatedArtists();
        dispatch({
            type: UPDATED_ARTISTS,
            updated_artists
        })
    } catch (e) {

    }
}

export const randomPaintings = async (dispatch) => {
    try {
        const random_paintings = await service.randomPaintings();
        dispatch({
            type: RANDOM_PAINTINGS,
            random_paintings
        })
    } catch (e) {

    }
}