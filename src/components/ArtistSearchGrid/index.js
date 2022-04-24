import React from "react";
import GeneralSearchArtistResultItem from "./ArtistSearchGridItem";
import ComponentHeader from "../ComponentHeader";

const Index = ({artists}) => {

    return (
        <>
            {ComponentHeader("Artist Results")}
            <div className={"p-2 mb-2"}>
                {artists.length === 0 ?
                    (<div className={"d-flex justify-content-center"}>
                        <span className={"text-danger"}>
                            No Artists Found
                        </span>
                    </div>)
                    :
                    <div className={'row list-group'}>
                        {artists.map(artist =>
                            <GeneralSearchArtistResultItem key={artist.artistId} artist={artist}/>)}
                    </div>
                }
            </div>
        </>
    )
}

export default Index