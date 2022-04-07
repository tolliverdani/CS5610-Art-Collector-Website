import React, {useEffect} from "react";
import ComponentHeader from "../ComponentHeader";
import {useDispatch, useSelector} from "react-redux";
import {artistDetails} from "../../actions/artpieces-actions";

const ArtistProfile = () => {
    const artist = useSelector(state => state.artist);
    const dispatch = useDispatch();
    useEffect(() => artistDetails(dispatch), [dispatch]);

    return (
        <>
            <div className={"row"}>
                {console.log(artist)}
            </div>
        </>
    );
}
export default ArtistProfile;