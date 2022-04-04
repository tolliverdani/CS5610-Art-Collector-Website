/* TODO this is just a test with local state...delete useState and eventually refactor */
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {findPaintingsByArtist} from "../../actions/artpieces-actions";

// import paintings from "./paintinginfo.json";
import PaintingGridItem from "./PaintingGridItem";
import ComponentHeader from "../ComponentHeader";


const PaintingGrid = () => {
    const paintings = useSelector(state => state.paintings);
    const dispatch = useDispatch();
    useEffect(() => findPaintingsByArtist(dispatch, "57726d87edc2cb3880b492c2"), [dispatch]);
    return (
        <>
            {ComponentHeader("Art Feed")}
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {paintings.map(painting_item => <PaintingGridItem key={painting_item.id} grid_item={painting_item} />)}
            </div>
        </>
    )
}

export default PaintingGrid;