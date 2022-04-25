import React from "react";
import {useProfile} from "../../../_context/profile-context";
import ComponentHeader from "../../ComponentHeader";
import EditProfileModal from "../EditProfile";
import SecureContent from "../../../_security/secure-content";

const ProfileStats = ({profile}) => {

    const joined = new Date(profile.joined);

    return (
        <>
            <div className={"p-2 mb-2 bg-light"}>
                <div className={"p-2"}>
                    {/* Pronouns */}
                    <div className={"p-0"}>
                        <i className="fa fa-genderless pe-2" aria-hidden="true"/>
                        {profile.hasOwnProperty("pronoun") === false ? "Not specified" : profile.pronoun}
                    </div>

                    {/* Location */}
                    <div className={"p-0"}>
                        <i className="fa fa-map-marker pe-2" aria-hidden="true"/>
                        {profile.hasOwnProperty("location") === false ? "Earth" : profile.location}
                    </div>

                    {/* Joined Date */}
                    <div className={"p-0"}>
                        <i className="fa fa-calendar-day pe-2" aria-hidden="true"/>
                        Joined {joined.toLocaleString('default', {month: 'long'}) + " " + joined.getFullYear()}
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