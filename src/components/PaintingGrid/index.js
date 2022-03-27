import React from "react";

import paintings from "./paintinginfo.json";
import PaintingGridItem from "./PaintingGridItem";
import ComponentHeader from "../ComponentHeader";

const PaintingGrid = () => {
    return (
        <>
            {ComponentHeader("Art Feed")}
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {paintings.map(painting_item => <PaintingGridItem key={painting_item.id} grid_item={painting_item} />)}
            </div>
        </>
    )
}

export default PaintingGrid;