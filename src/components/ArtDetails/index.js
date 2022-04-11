import React from "react";
import ComponentHeader from "../ComponentHeader";
import {useDispatch} from "react-redux";
import {paintingDetails} from "../../_actions/artpieces-actions";

const ArtDetails = ({id = "57727444edc2cb3880cb7bf6"} ) => {
    const dispatch = useDispatch();

    /* TODO: Why can't I grab the data like this??? */
    const data = paintingDetails(dispatch, id);

    return (
        <>
            <div className={"row"}>
                {ComponentHeader(data.title)}
                <div className={"col-4 card border-0 m-0"}>
                    <img className={'thumb-post img-responsive border-0'}
                         src={data.image}
                         alt={data.title}
                    />
                </div>
                <div className={"col-8 m-0 p-0"}>
                    <div className={"card bg-light border-0 align-text-center"}>
                        <div className={'card-body p-2'}>
                            <div>
                                <p className={"m-0"}><strong>Artist</strong></p>
                                <p className={"mb-2"}>{data.artistName}</p>
                                <p className={"m-0"}><strong>Completion Year</strong></p>
                                <p className={"mb-2"}>{data.completitionYear}</p>
                                <p className={"m-0"}><strong>Genres</strong></p>
                                <p className={"mb-2"}>{data.genres}</p>
                                <p className={"m-0"}><strong>Style</strong></p>
                                <p className={"mb-2"}>{data.styles}</p>
                                <p className={"m-0"}><strong>Media</strong></p>
                                <p className={"m-0"}>{data.media}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArtDetails;
