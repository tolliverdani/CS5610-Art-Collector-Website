import React from "react";
import PaintingGridItem from "./PaintingGridItem";
import {useDispatch} from 'react-redux';
import {findPaintingsByArtist} from "../../_actions/artpieces-actions";
import ArtistGridItem from "./ArtistGridItem";
import FavoriteGridItem from "./FavoriteGridItem";
import Collection from "../UserProfile/Collection";
import CollectionGridItem from "./CollectionGridItem";

const ArtGrid = (type, data) => {
    switch (type) {
        case "collection":
            return (
                <>
                    <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                        {data.map(painting_item =>
                            <CollectionGridItem key={painting_item.id} grid_item={painting_item}/>)}
                    </div>
                </>
            )
        case "favorite" :
            return (
                <>
                    <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                        {data.map(painting_item =>
                            <FavoriteGridItem key={painting_item.id} grid_item={painting_item}/>)}
                    </div>
                </>
            )
        default:
            return (
                <>
                    <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                        {data.map(painting_item =>
                            <PaintingGridItem key={painting_item.id} grid_item={painting_item}/>)}
                    </div>
                </>
            )
    }
}

const ArtistGrid = (type, data) => {
    return (
        <>
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {data.map(painting_item =>
                    <ArtistGridItem key={painting_item.id} type={type} grid_item={painting_item}/>)}
            </div>
        </>
    )
}

const PaintingsByArtist = (type, data, id) => {
    const dispatch = useDispatch()

    return (
        <>
            {ArtGrid(type, data)}
            <button type="button"
                    className={`rounded-pill btn-sm btn-primary ${data.hasMore ? "" : "d-none"}`}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => findPaintingsByArtist(dispatch, id, data.paginationToken)}>
                Show More
            </button>
        </>
    )
}

const SearchResults = (type, data) => {

    return (
        <>
            {ArtGrid(type, data)}
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
            return PaintingsByArtist(params.type, params.data, params.id);
        case "random":
            return ArtGrid(params.type, params.data);
        case "updated-artists":
            return ArtistGrid(params.type, params.data);
        case "search":
            return SearchResults(params.type, params.data);
        case "collection":
            return ArtGrid(params.type, params.data)
        case "favorite":
            return ArtGrid(params.type, params.data)
        default:
            return [];
    }
}

export default PaintingGrid;