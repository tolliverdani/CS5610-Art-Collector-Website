import {Link} from "react-router-dom";
import React from "react";

const EmptySearch = (search_term) => {

    return (
        <div className={"text-center"}>
            <h4 className={""}>
                Oh no!
            </h4>
            <i className="fa fa-5x fa-search text-secondary"/>
            <h6 className={""}>
                We didn't find anything for "{search_term}"
            </h6>
            <p className={""}>
                Please double-check the spelling or try another search term
            </p>

            <Link className={`btn btn-primary small border-0 rounded-pill m-1`}
                  to={"/home"}>
                Popular Art
            </Link>
            <Link className={`btn btn-primary small border-0 rounded-pill m-1`}
                  to={"/new-artists"}>
                New Artists
            </Link>
        </div>
    )
}

export default EmptySearch;