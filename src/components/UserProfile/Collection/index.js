import React from "react";
import ComponentHeader from "../../ComponentHeader";
import EmptyCollection from "../../Errors/EmptyCollection";
import PaintingGrid from "../../PaintingGrid";
import {Link} from "react-router-dom";

const Collection = (params) => {

    return (
        <>
            {ComponentHeader("Collection")}
            <div className={"p-2 mb-2"}>
                {params.paintings.length === 0 ?
                    EmptyCollection()
                    :
                    <PaintingGrid type={("collection")} data={params.paintings}/>
                }
            </div>
        </>
    );
}
export default Collection;