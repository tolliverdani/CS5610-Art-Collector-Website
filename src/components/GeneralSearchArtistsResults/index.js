import React, {useEffect} from "react";
import GeneralSearchArtistResultItem from "./GeneralSearchArtistResultItem";
import {useDispatch, useSelector} from "react-redux";
import {artistGeneralSearch} from "../../_actions/artpieces-actions";
import ComponentHeader from "../ComponentHeader";

const GeneralSearchArtistsResults = ({search_term = ""}) => {
            const artist_results = useSelector(state => state.artists);
            const dispatch = useDispatch();
            useEffect(() => artistGeneralSearch(dispatch, search_term), [dispatch, search_term]);
            return (
            <>
                {ComponentHeader("Artist Results")}
                { artist_results.length === 0
                    ?
                    (<div className={"d-flex justify-content-center"}><span className={"text-danger"}>No Artists Found</span></div>)
                    :
                    <div className={'row list-group'}>
                    {artist_results.map(artist => <GeneralSearchArtistResultItem key={artist.artistId} artist_info={artist} />)}
                </div>}
            </>
    )
}

export default GeneralSearchArtistsResults