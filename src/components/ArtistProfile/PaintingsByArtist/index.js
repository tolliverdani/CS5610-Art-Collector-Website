import React from "react";
import ComponentHeader from "../../ComponentHeader";
import EmptyCollection from "../../Errors/EmptyCollection";
import PaintingGrid from "../../PaintingGrid";

const PaintingsByArtist = (params) => {

    const artist_id = params.id
    const paintings = params.data

    return (
        <>
            {ComponentHeader("Paintings by Artist")}
            <div className={"p-2 mb-2"}>
                {paintings.length === 0 ?
                    EmptyCollection()
                    :
                    <PaintingGrid type={"artist"} data={paintings} id={artist_id}/>}
            </div>
        </>
    )
}

export default PaintingsByArtist