import React, {useEffect} from "react";

import NavigationSidebar from "../../components/NavigationSidebar";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import {useDispatch, useSelector} from "react-redux";
import PaintingGrid from "../../components/PaintingGrid";
import {useLocation} from "react-router-dom";
import {updatedArtists} from "../../_actions/artist-actions";
import ComponentHeader from "../../components/ComponentHeader";

const NewArtistsScreen = () => {
    const dispatch = useDispatch();

    const artist_data = useSelector(state => state.artists);
    useEffect(() => updatedArtists(dispatch), [dispatch]);

    const artists = artist_data.data

    return (

            <div className={"container"}>
                <NavigationTopMenu/>
                <div className={"row m-3 p-2"}>
                    <div className={'col-2'}>
                        <NavigationSidebar
                            active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                    </div>
                    <div className={'col-10 col-lg-8'}>
                        {ComponentHeader("New Artists")}
                        <PaintingGrid type={"artists"} data={artists}/>
                    </div>
                    <div className={'d-none d-lg-block col-2'}>
                        {/*<PaintingListings/>*/}
                    </div>
                </div>
            </div>

    );
};
export default NewArtistsScreen;