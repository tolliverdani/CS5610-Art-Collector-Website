import React, {useState} from "react";
import {Link} from "react-router-dom";

const SearchBar = () => {
    const [input_value, update_input] = useState("");

    return (
        <div className={`row align-items-center m-1`}>
            <div className={`d-flex align-items-center bg-white rounded-pill`}>
                <input value={input_value} type="text"
                       placeholder={"Search for Paintings and Artists"}
                       className={`p-1 form-control bg-transparent border-0 shadow-none no-highlight-input`}
                       onChange={(e) => {
                           update_input(e.target.value);}}
                       onKeyPress={(e) => {
                            if (e.key === 'Enter') window.location.href = (`/search/${input_value}`)}}/>
                <Link to={`/search/${input_value}`}>
                    <i className={`fas fa-search text-muted`}/>
                </Link>
            </div>
        </div>
    );
}
export default SearchBar;
