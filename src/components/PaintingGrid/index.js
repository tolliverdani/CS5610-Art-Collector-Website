import React from "react";

import paintings from "./paintinginfo.json";
import PaintingGridItem from "../PaintingGridItem";

const PaintingGrid = () =>{
    return (
        <>
            <h5><strong>Painting Listings</strong></h5>
            <ul className={"list-group"}>
                {paintings.map(painting_item => <PaintingGridItem grid_item={painting_item}/>)}
            </ul>
        </>
    )
}

export default PaintingGrid;