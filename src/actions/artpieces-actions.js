import * as service from "../services/artpieces-service";

export const FIND_PAINTINGS_BY_ARTIST = 'FIND_PAINTINGS_BY_ARTIST';

export const findPaintingsByArtist = async (dispatch, artist_id) => {
    const all_paintings_by_artist = await service.findPaintingsByArtist(artist_id);
    dispatch({
        type: FIND_PAINTINGS_BY_ARTIST,
        all_paintings_by_artist
    })
}