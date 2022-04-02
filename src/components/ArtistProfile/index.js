import React from "react";
import {Link} from "react-router-dom";
import ComponentHeader from "../ComponentHeader";

const ArtistProfile = ({
                           profile = {
                               artistUrl: "takashi-murakami",
                               artistName: "Takashi Murakami",
                               artistId: "57726db5edc2cb3880b4e400",
                               birthday: "1962-02-01",
                               nationality: "Japanese",
                               artMovement: "Neo-Pop Art",
                               image: "https://uploads8.wikiart.org/temp/5a16b05b-934b-4e0d-82f7-dac21a08b8f8.jpg!Portrait.jpg"
                           }
                       }) => {

    return (
        <>
            <div className={"row"}>
                <div className={"col-6"}>
                    <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 m-0'}
                         src={profile.image}
                         alt={profile.artistName}
                    />
                </div>
                <div className={"col-6"}>
                    {ComponentHeader(profile.artistName)}
                    <p className={"text-muted m-0 p-0 mb-1"}>@{profile.artistUrl}</p>
                    <p className={"text-muted m-0 p-0 mb-1"}>{profile.birthday}</p>
                    <p className={"text-muted m-0 p-0 mb-1"}>{profile.nationality}</p>
                    <p className={"text-muted m-0 p-0 mb-1"}>{profile.artMovement}</p>
                </div>
            </div>
        </>
    );
}
export default ArtistProfile;