import React from "react";
import PaintingGridItem from "./PaintingGridItem";
import {useDispatch} from 'react-redux';
import {findPaintingsByArtist} from "../../_actions/artpieces-actions";
import ArtistGridItem from "./ArtistGridItem";

const ArtGrid = (data) => {
    console.log("Inside the paintingGrid: " + data)
    return (
        <>
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {data.map(painting_item =>
                    <PaintingGridItem key={painting_item.id} grid_item={painting_item}/>)}
            </div>
        </>
    )
}

const ArtistGrid = (data) => {
    return (
        <>
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {data.map(painting_item =>
                    <ArtistGridItem key={painting_item.id} grid_item={painting_item}/>)}
            </div>
        </>
    )
}

const PaintingsByArtist = (data, id) => {
    const dispatch = useDispatch()

    return (
        <>
            {ArtGrid(data)}
            <button type="button"
                    className={`rounded-pill btn-sm btn-primary ${data.hasMore ? "" : "d-none"}`}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => findPaintingsByArtist(dispatch, id, data.paginationToken)}>
                Show More
            </button>
        </>
    )
}

const SearchResults = (data) => {

    return (
        <>
            {ArtGrid(data)}
            <button className={`rounded-pill btn-sm btn-primary ${data.hasMore ? "" : "d-none"}`}>
                Show More
            </button>
            }
        </>
    )
}

const PaintingGrid = (params) => {
    console.log(params)

    switch (params.type) {
        case "artist":
            return PaintingsByArtist(params.data, params.id);
        case "random":
            return ArtGrid(params.data);
        case "updated-artists":
            return ArtistGrid(params.data);
        case "search":
            return SearchResults(params.data);
        case "collection":
            return ArtGrid(params.data)
        default:
            return [];
    }
}

export default PaintingGrid;