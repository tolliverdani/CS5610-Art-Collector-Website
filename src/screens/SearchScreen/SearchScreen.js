import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {artistGeneralSearch, generalSearch} from "../../_actions/artpieces-actions";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import ArtistSearchGrid from "../../components/ArtistSearchGrid";
import PaintingGrid from "../../components/PaintingGrid";
import EmptySearch from "../../components/Errors/EmptySearch";
import ComponentHeader from "../../components/ComponentHeader";

const SearchScreen = () => {
    const {searchTerm} = useParams();
    const dispatch = useDispatch();

    const paintings_data = useSelector(state => state.paintings);
    const artists = useSelector(state => state.artistSearch);

    useEffect(() => {generalSearch(dispatch, searchTerm);}, [dispatch, searchTerm]);
    useEffect(() => artistGeneralSearch(dispatch, searchTerm), [dispatch, searchTerm]);
    // useEffect(() => findUserById(dispatch), [dispatch])

    const paintings = paintings_data.data;

    return (
        <div className={"container"}>
            <NavigationTopMenu/>
            <div className={'row m-3 p-2'}>
                <div className={'col-2'}>
                    <NavigationSidebar
                        active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'col-10 col-lg-8'}>
                    {ComponentHeader("Search Results")}
                    {paintings.length === 0 ?
                        (EmptySearch(searchTerm))
                        :
                        <PaintingGrid type={"search"} data={paintings}/>}
                </div>
                <div className={'d-none d-lg-block col-2'}>
                    {/*TODO look at the reducer*/}
                    <ArtistSearchGrid artists={artists}/>
                </div>
            </div>
        </div>
    );
};
export default SearchScreen;