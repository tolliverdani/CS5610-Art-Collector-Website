import React from "react";

import paintings from "./paintinginfo.json";
import PaintingGridItem from "./PaintingGridItem";

const PaintingGrid = () => {
    return (
        <>
            {/*TODO should probably keep this grid component independent of the heading?*/}
            <h5><strong>Art Feed</strong></h5>
            <div className={'Container'}>
                <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4 m-0 p-0'}>
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