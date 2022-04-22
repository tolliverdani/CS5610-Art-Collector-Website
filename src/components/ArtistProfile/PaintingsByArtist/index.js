import React from "react";
import ComponentHeader from "../../ComponentHeader";
import EmptyCollection from "../../Errors/EmptyCollection";
import PaintingGrid from "../../PaintingGrid";

const PaintingsByArtist = (params) => {

    const artist_id = params.id
    const paintings = params.data

    return (
        <div className={"p-2 border-bottom"}>
            <div className={"pt-2 pb-2 d-flex justify-content-between"}>
                {ComponentHeader("Paintings by Artist")}
            </div>
            {paintings.length === 0 ?
                EmptyCollection()
                :
                <PaintingGrid type={"artist"} data={paintings} id={artist_id}/>}
        </div>
    )
}

export default PaintingsByArtist