import React from "react";

import paintings from "./paintinginfo.json";
import PaintingGridItem from "../PaintingGridItem";

const PaintingGrid = () => {
    return (
        <>
            <h5><strong>Art Feed</strong></h5>
            <div className={'Container'}>
                <div className={'row m-0 p-0'}>
                    {paintings.map(painting_item =>
                        <div className={'col m-0 p-0'}>
                            <PaintingGridItem grid_item={painting_item}/>
                        </div>)}
                </div>
            </div>
        </>
    )
}

export default PaintingGrid;