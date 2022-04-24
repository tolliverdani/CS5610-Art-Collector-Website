import React from "react";
import {useProfile} from "../../../_context/profile-context";
import ComponentHeader from "../../ComponentHeader";
import EditProfileModal from "../EditProfile";
import SecureContent from "../../../_security/secure-content";

const ProfileStats = () => {

    const {profile} = useProfile();
    const joined = new Date(profile.joined);

    return (
        <>
            <div className={"p-2 bg-light"}>
                <div className={"p-2"}>
                    {/* Pronouns */}
                    <div className={"p-0"}>
                        <i className="fa fa-genderless pe-2" aria-hidden="true"/>
                        {profile.hasOwnProperty(profile.pronouns) === false ? "Not specified" : profile.location}
                    </div>

                    {/* Location */}
                    <div className={"p-0"}>
                        <i className="fa fa-map-marker pe-2" aria-hidden="true"/>
                        {profile.hasOwnProperty(profile.location) === false ? "Earth" : profile.location}
                    </div>

                    {/* Joined Date */}
                    <div className={"p-0"}>
                        <i className="fa fa-calendar-day pe-2" aria-hidden="true"/>
                        Joined {joined.toLocaleString('default', {month: 'long'}) + " " + joined.getFullYear()}
                    </div>

                    {/* Rating */}
                    <div className={"p-0"}>
                        <i className="fa fa-star pe-2" aria-hidden="true"/>
                        {profile.hasOwnProperty(profile.rating) === false ? "N/A" : profile.rating}
                    </div>
                </div>
            </div>
            <SecureContent>
                <EditProfileModal/>
            </SecureContent>
        </>
    );
}
export default ProfileStats;