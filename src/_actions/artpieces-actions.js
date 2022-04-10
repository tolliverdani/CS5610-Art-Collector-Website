import * as service from "../_services/artpieces-service";

export const FIND_PAINTINGS_BY_ARTIST = 'FIND_PAINTINGS_BY_ARTIST';
export const GENERAL_SEARCH = 'GENERAL_SEARCH';
export const ARTIST_GENERAL_SEARCH = 'ARTIST_GENERAL_SEARCH';
export const RANDOM_PAINTINGS = "RANDOM_PAINTINGS";
export const ARTIST_DETAILS = 'ARTIST_DETAILS';
export const PAINTING_DETAILS = 'PAINTING_DETAILS';
export const UPDATED_ARTISTS = 'UPDATED_ARTISTS';

export const findPaintingsByArtist = async (dispatch, artist_id) => {
    const all_paintings_by_artist = await service.findPaintingsByArtist(artist_id);
    dispatch({
        type: FIND_PAINTINGS_BY_ARTIST,
        all_paintings_by_artist
    })
}

export const generalSearch = async (dispatch, artist) => {
    const general_search = await service.generalSearch(artist);
    if ( general_search.length !== 0 ) {
        dispatch({
            type: GENERAL_SEARCH,
            general_search: general_search
        })
    }
}

export const artistGeneralSearch = async (dispatch, search_term) => {
    const artist_general_search = await service.artistGeneralSearch(search_term);
    if ( artist_general_search.length !== 0 ){
        dispatch(
            {
                type: ARTIST_GENERAL_SEARCH,
                artist_general_search: artist_general_search
            }
        )
    }
}

export const paintingDetails = async (dispatch, painting_id) => {
    const painting_details = await service.paintingDetails(painting_id);
    dispatch({
        type: PAINTING_DETAILS,
        painting_details
    })
}

export const artistDetails = async (dispatch, artist) => {
    const artist_details = await service.artistDetails(artist);
    dispatch({
        type: ARTIST_DETAILS,
        artist_details
    })
}

export const updatedArtists = async (dispatch) => {
    const updated_artists = await service.updatedArtists();
    dispatch({
        type: UPDATED_ARTISTS,
        updated_artists
    })
}

export const randomPaintings = async (dispatch) => {
    const random_paintings = await service.randomPaintings();
    dispatch({
        type: RANDOM_PAINTINGS,
        random_paintings
    })
}