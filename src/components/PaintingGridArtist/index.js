import React, {useEffect} from "react";
import ComponentHeader from "../ComponentHeader";
import {useDispatch, useSelector} from 'react-redux';
import {updatedArtists} from "../../_actions/artpieces-actions";

import ArtistGridItem from "./ArtistGridItem";

const ArtistGrid = ({id= "57726d85edc2cb3880b48ccd"}) => {
    const paintings = useSelector(state => state.paintings);
    const dispatch = useDispatch();
    useEffect(() => updatedArtists(dispatch, id), [dispatch]);

    return (
        <>
            {ComponentHeader("Paintings by Artist")}
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {paintings.map(painting_item => <ArtistGridItem key={painting_item.id} grid_item={painting_item}/>)}
            </div>
        </>
    )
}

export default ArtistGrid;