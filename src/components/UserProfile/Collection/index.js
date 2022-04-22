import React from "react";
import ComponentHeader from "../../ComponentHeader";
import EmptyCollection from "../../Errors/EmptyCollection";
import PaintingGrid from "../../PaintingGrid";

const Collection = (params) => {

    return (
        <div className={"p-2 border-bottom"}>
            {ComponentHeader("Collection")}
            {params.paintings.length === 0 ?
                EmptyCollection()
                :
                <PaintingGrid type={("collection")} data={params.paintings}/>}
        </div>
    );
}
export default Collection;