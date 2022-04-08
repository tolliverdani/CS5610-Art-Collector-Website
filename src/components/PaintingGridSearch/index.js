import React, {useEffect} from "react";
import ComponentHeader from "../ComponentHeader";
import {useDispatch, useSelector} from 'react-redux';
import {findPaintingsByArtist} from "../../_actions/artpieces-actions";

import PaintingGridItem from "./PaintingGridItem";

const PaintingGridSearch = ({id= "57726d85edc2cb3880b48ccd"}) => {
    const paintings = useSelector(state => state.paintings);
    const dispatch = useDispatch();
    useEffect(() => findPaintingsByArtist(dispatch, id), [dispatch]);

    return (
        <>
            {ComponentHeader("Paintings by Artist")}
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {paintings.map(painting_item => <PaintingGridItem key={painting_item.id} grid_item={painting_item}/>)}
            </div>
        </>
    )
}

export default PaintingGridSearch;