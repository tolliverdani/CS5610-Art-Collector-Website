import * as service from "../_services/artist-service";

export const UPDATED_ARTISTS = 'UPDATED_ARTISTS';

export const updatedArtists = async (dispatch) => {
    console.log("In artpieces actions. In Updated Artists")
    const updated_artists = await service.updatedArtists();
    dispatch({
        type: UPDATED_ARTISTS,
        updated_artists
    })
}
