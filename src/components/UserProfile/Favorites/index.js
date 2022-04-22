import React from "react";
import ComponentHeader from "../../ComponentHeader";
import EmptyCollection from "../../Errors/EmptyCollection";
import PaintingGrid from "../../PaintingGrid";

const Favorites = (params) => {

    return (
        <div className={"p-2 border-bottom"}>
            {ComponentHeader("Favorites")}
            {params.paintings.length === 0 ?
                EmptyCollection()
                :
                <PaintingGrid type={("preview")} data={params.paintings.slice(0,5)}/>}
        </div>
    );
}
export default Favorites;