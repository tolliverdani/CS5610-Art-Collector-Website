import React, {useEffect} from "react";
import ComponentHeader from "../ComponentHeader";
import PaintingGridItem from "./PaintingGridItem";
import {useDispatch, useSelector} from 'react-redux';
import {findPaintingsByArtist, generalSearch, randomPaintings, updatedArtists} from "../../_actions/artpieces-actions";
import ArtistGridItem from "./ArtistGridItem";

const RandomPaintings = () => {
    const paintings = useSelector(state => state.paintings);
    const dispatch = useDispatch();
    useEffect(() => randomPaintings(dispatch), [dispatch]);

    return (
        <>
            {ComponentHeader("Popular Paintings")}
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {paintings.map(painting_item => <PaintingGridItem key={painting_item.id}
                                                                  grid_item={painting_item}/>)}
            </div>
        </>
    )
}

const UpdatedArtists = () => {
    const paintings = useSelector(state => state.paintings);
    const dispatch = useDispatch();
    useEffect(() => updatedArtists(dispatch), [dispatch]);
    return (
        <>
            {ComponentHeader("Popular Artists")}
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {paintings.map(painting_item => <ArtistGridItem key={painting_item.id}
                                                                grid_item={painting_item}/>)}
            </div>
        </>
    )
}

const PaintingsByArtist = (id) => {
    {/* TODO: for some reason, this one isn't working while the others are...*/}
    const paintings = useSelector(state => state.paintings);
    const dispatch = useDispatch();
    useEffect(() => findPaintingsByArtist(dispatch, id), [dispatch, id]);

    return (
        <>
            {ComponentHeader("Paintings by Artist")}
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {paintings.map(painting_item => <PaintingGridItem key={painting_item.id}
                                                                  grid_item={painting_item}/>)}
            </div>
        </>
    )
}

const SearchResults = (search_term) => {
    const paintings = useSelector(state => state.paintings);
    const dispatch = useDispatch();
    useEffect(() => generalSearch(dispatch, search_term), [dispatch, search_term]);

    return (
        <>
            {ComponentHeader("Search Results")}
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {paintings.map(painting_item => <PaintingGridItem key={painting_item.id}
                                                                  grid_item={painting_item}/>)}
            </div>
        </>
    )
}

const PaintingGrid = ({type}, {id}) => {
    switch (type) {
        case "artist":
            return PaintingsByArtist(id);
        case "random":
            return RandomPaintings();
        case "updated-artists":
            return UpdatedArtists();
        case "search":
            return SearchResults(id);
        default:
            return;
    }
}

export default PaintingGrid;