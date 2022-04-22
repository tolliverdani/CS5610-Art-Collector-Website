import React from "react";

const ArtDetails = (params) => {

    const data = params.data

    return (
            <div className={"p-2 border-bottom"}>
                <div className={"border-0 m-0"}>
                    <img className={'thumb-post img-responsive border-0'}
                         src={data.image}
                         alt={data.title}/>
                </div>
            </div>
    );
};

export default ArtDetails;
