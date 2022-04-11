import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ArtistProfileScreen from "./screens/ArtistProfileScreen/ArtistProfileScreen";
import UserProfileScreen from "./screens/UserProfileScreen/UserProfileScreen";
import ArtPieceScreen from "./screens/ArtPieceScreen/ArtPieceScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import EditProfileScreen from "./components/UserProfile/EditProfile";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import NewArtistsScreen from "./screens/NewArtistsScreen/NewArtistsScreen";

// TODO Can we switch this to the most up-to-date version? > lets do it
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<HomeScreen/>}/>
                    <Route path="/">
                        <Route path="home"
                               element={<HomeScreen/>}/>
                        <Route path="search"
                               element={<SearchScreen/>}/>
                        <Route path="search/:searchTerm"
                               element={<SearchScreen/>}/>
                        <Route path="login"
                               element={<LoginScreen/>}/>
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
                        <Route path="user"
                               element={<UserProfileScreen/>}>
                            <Route index
                                   element={<UserProfileScreen/>}/>
                            <Route path="edit-profile"
                                   element={<EditProfileScreen/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
