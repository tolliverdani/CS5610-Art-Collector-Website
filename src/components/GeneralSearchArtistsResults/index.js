import React, {useEffect, useState} from "react";
import GeneralSearchArtistResultItem from "./GeneralSearchArtistResultItem";
import {useDispatch, useSelector} from "react-redux";
import {artistGeneralSearch, generalSearch} from "../../_actions/artpieces-actions";
import ComponentHeader from "../ComponentHeader";

const GeneralSearchArtistsResults = ({search_term = ""}) => {
            const artist_results = useSelector(state => state.artists);
            const dispatch = useDispatch();
            useEffect(() => artistGeneralSearch(dispatch, search_term), [dispatch, search_term]);
            return (
            <>
                {ComponentHeader("Artist Results")}
                <div className={'row'}>
                    {artist_results.map(artist => <GeneralSearchArtistResultItem key={artist.artistId} artist_info={artist} />)}
                </div>
            </>
    )
}

export default GeneralSearchArtistsResults