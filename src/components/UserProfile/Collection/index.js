import React from "react";
import ComponentHeader from "../../ComponentHeader";
import EmptyCollection from "../../Errors/EmptyCollection";
import PaintingGrid from "../../PaintingGrid";
import {Link} from "react-router-dom";

const Collection = (params) => {

    return (
        <div className={"p-2 border-bottom"}>
            <div className={"pt-2 pb-2 d-flex justify-content-between"}>
                {ComponentHeader("Collection")}
                <Link to={"/"} className={"btn btn-sm btn-transparent rounded-pill"}>
                    See More
                </Link>
            </div>            {params.paintings.length === 0 ?
                EmptyCollection()
                :
                <PaintingGrid type={("collection")} data={params.paintings}/>}
        </div>
    );
}
export default Collection;