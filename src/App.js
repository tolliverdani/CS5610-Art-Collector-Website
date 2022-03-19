import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ArtistProfileScreen from "./screens/ArtistProfileScreen/ArtistProfileScreen";
import UserProfileScreen from "./screens/UserProfileScreen/UserProfileScreen";
import ArtPieceScreen from "./screens/ArtPieceScreen/ArtPieceScreen";

// TODO Can we switch this to the most up-to-date version?
function App() {
    return (
        <BrowserRouter>
            <Route path={["/", "/home"]} exact={true} component={HomeScreen}/>
            <Route path="/art" exact={true} component={ArtPieceScreen}/>
            <Route path="/artist" exact={true} component={ArtistProfileScreen}/>
            <Route path="/user" exact={true} component={UserProfileScreen}/>
        </BrowserRouter>
    );
}

export default App;
