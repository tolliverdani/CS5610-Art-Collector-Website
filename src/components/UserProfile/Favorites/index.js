import React from "react";
import ComponentHeader from "../../ComponentHeader";
import EmptyCollection from "../../Errors/EmptyCollection";
import PaintingGrid from "../../PaintingGrid";

const Favorites = (params) => {

    return (
        <>
            {ComponentHeader("Favorites")}
            <div className={"p-2 mb-2"}>
                {params.paintings.length === 0 ?
                    EmptyCollection()
                    :
                    <PaintingGrid type={("favorite")} data={params.paintings.slice(0, 4)}/>
                }
            </div>
        </>
    );
}
export default Favorites;