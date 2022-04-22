import React from "react";
import {useProfile} from "../../../_context/profile-context";

const ProfileStats = () => {

    const {profile} = useProfile();
    const joined = new Date(profile.joined);

    return (
        <div className={"p-2 bg-light border-bottom"}>
            <div className={"d-flex justify-content-between"}>
                    <span className={"p-0"}>
                        <i className="fa fa-map-marker pe-2" aria-hidden="true"/>
                        {profile.hasOwnProperty(profile.location) === false ? "Earth" : profile.location}
                    </span>
                <span className={"p-0"}>
                        <i className="fa fa-calendar-day pe-2" aria-hidden="true"/>
                        Joined {joined.toLocaleString('default', {month: 'long'}) + " " + joined.getFullYear()}
                    </span>
                <span className={"p-0"}>
                        <i className="fa fa-star pe-2" aria-hidden="true"/>
                    {profile.hasOwnProperty(profile.rating) === false ? "N/A" : profile.rating}
                    </span>
            </div>
        </div>
    );
}
export default ProfileStats;