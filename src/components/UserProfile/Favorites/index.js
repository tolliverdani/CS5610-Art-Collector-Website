import React from "react";
import ComponentHeader from "../../ComponentHeader";
import EmptyCollection from "../../Errors/EmptyCollection";
import PaintingGrid from "../../PaintingGrid";
import {Link} from "react-router-dom";

const Favorites = (params) => {

    const paintings = params.paintings

    return (
        <>
            {ComponentHeader("Favorites")}
            <div className={"p-2 mb-2"}>
                {paintings.length === 0 ?
                    EmptyCollection()
                    :
                    <PaintingGrid type={("favorite")} data={paintings.slice(0, 4)}/>
                }
            </div>
        </>
    );
}
export default Favorites;