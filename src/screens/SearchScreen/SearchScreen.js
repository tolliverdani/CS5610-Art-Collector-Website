import React, {useEffect, useState} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {generalSearch} from "../../_actions/artpieces-actions";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import GeneralSearchArtistsResults from "../../components/GeneralSearchArtistsResults";
import PaintingGrid from "../../components/PaintingGrid";
import EmptySearch from "../../components/Errors/EmptySearch";
import ComponentHeader from "../../components/ComponentHeader";

const SearchScreen = () => {
    const {searchTerm} = useParams();

    const paintings_data = useSelector(state => state.paintings);
    const paintings = paintings_data.data;
    const dispatch = useDispatch();

    useEffect(() => {
        generalSearch(dispatch, searchTerm);
    }, [dispatch, searchTerm]);

    return (
        <>
            <NavigationTopMenu/>
            <div className={"container"}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <NavigationSidebar
                            active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        {ComponentHeader("Search Results")}
                        {paintings.length === 0 ?
                            (EmptySearch(searchTerm))
                            :
                            <PaintingGrid type={"search"} data={paintings}/>}
                    </div>
                    <div className={'col-3 d-none d-lg-block'}>
                        <GeneralSearchArtistsResults search_term={searchTerm}/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SearchScreen;