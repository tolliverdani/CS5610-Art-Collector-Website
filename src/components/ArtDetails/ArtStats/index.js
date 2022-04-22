import React from "react";
import {useProfile} from "../../../_context/profile-context";
import {Link} from "react-router-dom";
import ComponentHeader from "../../ComponentHeader";

const ProfileStats = (params) => {

    const data = params.data

    return (
        <div className={"p-2 bg-light border-bottom"}>
            <div className={""}>
                <div>
                    {ComponentHeader(data.title)}
                </div>
                <div className={"p-0"}>
                    <p className={"m-0"}><strong>Artist</strong></p>
                    <Link className={"text-decoration-none"}
                          to={`/artist/${data.artistUrl}/${data.artistId}`}>
                        <p className={"m-0"}>{data.artistName}</p>
                    </Link>
                </div>
                <div className={"p-0"}>
                    <p className={"m-0"}><strong>Completion Year</strong></p>
                    <p className={"m-0"}>{data.completitionYear}</p>
                </div>
                <div className={"p-0"}>
                    <p className={"m-0"}><strong>Genres</strong></p>
                    <p className={"m-0"}>{data.genres}</p>
                </div>
                <div className={"p-0"}>
                    <p className={"m-0"}><strong>Style</strong></p>
                    <p className={"m-0"}>{data.styles}</p>
                </div>
                <div className={"p-0"}>
                    <p className={"m-0"}><strong>Media</strong></p>
                    <p className={"m-0"}>{data.media}</p>
                </div>
            </div>
        </div>
    )
        ;
}
export default ProfileStats;