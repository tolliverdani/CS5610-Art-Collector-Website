import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {artistGeneralSearch} from "../../../_actions/artpieces-actions";

const SearchBar = () => {
    const dispatch = useDispatch()
    const [input_value, update_input] = useState("");
    

    return (
        <>
            <div className={`row align-items-center m-1`}>
                <div className={`d-flex align-items-center bg-white rounded-pill`}>
                    <input value={input_value} type="text"
                           placeholder={"Search for Paintings and Artists"}
                           className={`p-1 form-control bg-transparent border-0 shadow-none no-highlight-input`}
                           onChange={(e) => {
                               update_input(e.target.value);
                           }}/>
                    <i className={`fas fa-search text-muted`}
                       onClick={(e) => {
                           artistGeneralSearch(dispatch, input_value)
                       }}/>
                </div>
            </div>
        </>
    );
}
export default SearchBar;
