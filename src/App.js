import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProfileProvider} from "./_context/profile-context";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ArtistProfileScreen from "./screens/ArtistProfileScreen/ArtistProfileScreen";
import UserProfileScreen from "./screens/UserProfileScreen/UserProfileScreen";
import ArtPieceScreen from "./screens/ArtPieceScreen/ArtPieceScreen";
import EditProfileScreen from "./components/UserProfile/EditProfile";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import NewArtistsScreen from "./screens/NewArtistsScreen/NewArtistsScreen";
import SecureRoute from "./components/Security/secure-route"
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen/PrivacyPolicyScreen";

import paintingsReducer from "./_reducers/paintings-reducer"
import artistReducer from "./_reducers/artist-reducer";
import collectionsReducer from "./_reducers/collections-reducer";
import commentsReducer from "./_reducers/comments-reducer";

const reducers = combineReducers({
    paintings: paintingsReducer,
    artists: artistReducer,
    collection: collectionsReducer,
    comments: commentsReducer
})
const store = createStore(reducers);

// TODO Can we switch this to the most up-to-date version? > lets do it
function App() {
    return (
        <ProfileProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="/">
                            <Route path="home"
                                   element={<HomeScreen/>}/>
                            <Route path="search"
                                   element={<SearchScreen/>}/>
                            <Route path="search/:searchTerm"
                                   element={<SearchScreen/>}/>
                            <Route path="new-artists"
                                   element={<NewArtistsScreen/>}/>
                            <Route path="artist"
                                   element={<ArtistProfileScreen/>}/>
                            <Route path="artist/:artist_name/:artist_id"
                                   element={<ArtistProfileScreen/>}/>
                            <Route path="art"
                                   element={<ArtPieceScreen/>}/>
                            <Route path="art/:painting_id"
                                   element={<ArtPieceScreen/>}/>
                            <Route path="profile"
                                   element={
                                       <SecureRoute>
                                           <UserProfileScreen/>
                                       </SecureRoute>
                                   }/>
                            <Route index
                                   element={
                                       <SecureRoute>
                                           <UserProfileScreen/>
                                       </SecureRoute>
                                   }/>
                            <Route path="edit-profile"
                                   element={
                                       <SecureRoute>
                                           <EditProfileScreen/>
                                       </SecureRoute>
                                   }/>
                            <Route path="privacy"
                                   element={<PrivacyPolicyScreen/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </ProfileProvider>
    );
}

export default App;
