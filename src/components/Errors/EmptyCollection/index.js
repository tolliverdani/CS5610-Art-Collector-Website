import {Link} from "react-router-dom";
import React from "react";

const EmptyCollection = () => {

    return (
        <div className={""}>
            <h6>There's nothing here... yet</h6>

            <p>Explore the pages below to find art to add to your collection</p>

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

export default EmptyCollection;