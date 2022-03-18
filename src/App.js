import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ArtistProfileScreen from "./screens/ArtistProfileScreen/ArtistProfileScreen";
import UserProfileScreen from "./screens/UserProfileScreen/UserProfileScreen";

function App() {
    return (
        <BrowserRouter>
            <Route path={["/", "/home"]} exact={true} component={HomeScreen}/>
            <Route path="/artist" exact={true} component={ArtistProfileScreen}/>
            <Route path="/user" exact={true} component={UserProfileScreen}/>
        </BrowserRouter>
    );
}

export default App;
