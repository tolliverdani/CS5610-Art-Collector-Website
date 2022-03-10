import React from "react";

const SearchBar = () => {
    return (
        <>
            <div className={`row align-items-center ms-2 m-2`}>
                <div className={`d-flex col-11 align-items-center bg-white rounded-pill`}>
                    <i className={`fas fa-search text-muted`}/>
                    <input type="text" className={`form-control bg-transparent border-0`}
                           placeholder="Search [NAME OF WEBSITE]"/>
                </div>

                <div className={`col-1`} href="#">
                    <i className={`fas fa-cog fa-2x text-primary`}/>
                </div>
            </div>
        </>
    );
}
export default SearchBar;
