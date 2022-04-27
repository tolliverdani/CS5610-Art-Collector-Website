import React from "react";
import {useDispatch} from 'react-redux';
import {findPaintingsByArtist} from "../../_actions/artpieces-actions";

import ArtistGridItem from "./ArtistGridItem";
import PaintingGridItem from "./PaintingGridItem";
import FavoriteGridItem from "./FavoriteGridItem";
import CollectionGridItem from "./CollectionGridItem";

const GridData = (type, data) => {

    switch (type) {
        case "collection":
            return data.map(painting_item =>
                <CollectionGridItem key={painting_item.id} grid_item={painting_item}/>)
        case "favorite" :
            return data.map(painting_item =>
                <FavoriteGridItem key={painting_item.id} grid_item={painting_item}/>)
        case "artists":
            return data.data.map(painting_item =>
                <ArtistGridItem key={painting_item.id} grid_item={painting_item}/>)
        default:
            return data.map(painting_item =>
                <PaintingGridItem key={painting_item.id} grid_item={painting_item}/>)
    }
}

const GridItem = (type, data) => {
    return (
        <div className={"p-2 mb-2"}>
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {GridData(type, data)}
            </div>
        </div>
    )
}

const PaintingGrid = (params) => {

    const dispatch = useDispatch()

    switch (params.type) {
        case "artist":
            return (
                <>
                    {GridItem("painting", params.data)}
                    <button type="button"
                            className={`rounded-pill btn-sm btn-primary ${params.data.hasMore ? "" : "d-none"}`}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => findPaintingsByArtist(dispatch, params.data._id, params.data.paginationToken)}>
                        Show More
                    </button>
                </>
            )
        case "random":
            return GridItem(params.type, params.data);
        case "artists":
            return GridItem(params.type, params.data);
        case "search":
            return (
                <>
                    {GridItem(params.type, params.data)}
                    <button className={`rounded-pill btn-sm btn-primary ${params.data.hasMore ? "" : "d-none"}`}>
                        Show More
                    </button>
                    }
                </>
            )
        case "collection":
            return GridItem(params.type, params.data)
        case "favorite":
            return GridItem(params.type, params.data)
        default:
            return [];
    }
}

export default PaintingGrid;