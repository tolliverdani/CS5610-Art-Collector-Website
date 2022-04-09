import React from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/PaintingListings";

import paintingsReducer from "../../_reducers/paintings-reducer"
import artistReducer from "../../_reducers/artist-reducer";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {useParams} from "react-router-dom";
import PaintingGridSearch from "../../components/PaintingGridSearch";
import GeneralSearchArtistResultItem from "../../components/GeneralSearchArtistsResults/GeneralSearchArtistResultItem";
import GeneralSearchArtistsResults from "../../components/GeneralSearchArtistsResults";

const reducers = combineReducers({paintings: paintingsReducer, artists: artistReducer})
const store = createStore(reducers);

const SearchScreen = () => {
    const {searchTerm} = useParams();
    return (
        <Provider store={store}>
            <div>
                <NavigationTopMenu/>
                <div className={"container"}>
                    <div className={'row pt-2'}>
                        <div className={'col-2'}>
                            <NavigationSidebar/>
                        </div>
                        <div className={'col-10 col-lg-7'}>
                            <PaintingGridSearch search_term={searchTerm}/>
                        </div>
                        <div className={'col-3 d-none d-lg-block'}>
                            <GeneralSearchArtistsResults search_term={searchTerm}/>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    );
};
export default SearchScreen;