import React from "react";
import ComponentHeader from "../../ComponentHeader";
import EmptyCollection from "../../Errors/EmptyCollection";
import PaintingGrid from "../../PaintingGrid";
import {Link} from "react-router-dom";

const Favorites = (params) => {

    const paintings = params.paintings

    return (
        <div className={"p-2 border-bottom"}>
            <div className={"pt-2 pb-2 d-flex justify-content-between"}>
                {ComponentHeader("Favorites")}
                <Link to={"/"} className={"btn btn-sm btn-transparent rounded-pill"}>
                    See More
                </Link>
            </div>
            {paintings.length === 0 ?
                EmptyCollection()
                :
                <PaintingGrid type={("favorite")} data={paintings.slice(0, 4)}/>}
        </div>
    );
}
export default Favorites;