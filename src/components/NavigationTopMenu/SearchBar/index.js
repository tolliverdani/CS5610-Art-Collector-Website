import React from "react";

const SearchBar = () => {
    return (
        <>
            <div className={`row align-items-center ms-2 m-2`}>
                <div className={`d-flex align-items-center bg-white rounded-pill`}>
                    <i className={`fas fa-search text-muted`}/>
                    <input type="text" className={`form-control bg-transparent border-0 shadow-none no-highlight-input`}
                           placeholder="Search"/>
                </div>
            </div>
        </>
    );
}
export default SearchBar;
