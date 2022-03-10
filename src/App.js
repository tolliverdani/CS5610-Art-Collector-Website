import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/" component={HomeScreen}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
