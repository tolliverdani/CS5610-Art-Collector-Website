import React, {useEffect} from "react";
import ComponentHeader from "../ComponentHeader";
import {useDispatch, useSelector} from "react-redux";
import {artistDetails} from "../../actions/artpieces-actions";

const ArtistProfile = () => {
    const artist = useSelector(state => state.artist);
    const dispatch = useDispatch();
    useEffect(() => artistDetails(dispatch), [dispatch]);

    return (
        <>
            <div className={"row"}>
                <div className={"col-6"}>
                    <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 m-0'}
                         src={artist.image}
                         alt={artist.OriginalArtistName}/>
                </div>
                <div className={"col-6"}>
                    {ComponentHeader(artist.OriginalArtistName)}
                    <p className={"text-muted m-0 p-0 mb-1"}>@{artist.url}</p>
                    <p className={"text-muted m-0 p-0 mb-1"}>{artist.birthDayAsString}</p>
                    <p className={"text-muted m-0 p-0 mb-1"}>{artist.gender}</p>
                </div>
            </div>
        </>
    );
}
export default ArtistProfile;