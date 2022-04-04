import * as service from "../services/artpieces-service";

export const FIND_PAINTINGS_BY_ARTIST = 'FIND_PAINTINGS_BY_ARTIST';
export const ARTIST_GENERAL_SEARCH = 'ARTIST_GENERAL_SEARCH';
export const RANDOM_PAINTINGS = "RANDOM_PAINTINGS";

export const findPaintingsByArtist = async (dispatch, artist_id) => {
    const all_paintings_by_artist = await service.findPaintingsByArtist(artist_id);
    dispatch({
        type: FIND_PAINTINGS_BY_ARTIST,
        all_paintings_by_artist
    })
}

export const artistGeneralSearch = async (dispatch, artist) => {
    const artist_general_search = await service.artistGeneralSearch(artist);
    dispatch({
        type: ARTIST_GENERAL_SEARCH,
        artist_general_search
    })
}

export const randomPaintings = async (dispatch) => {
    const random_paintings = await service.randomPaintings();
    dispatch({
        type: RANDOM_PAINTINGS,
        random_paintings
    })
}