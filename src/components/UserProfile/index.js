import React from "react";
import {useProfile} from "../../_context/profile-context";

const UserProfile = (params) => {

    const profile = useProfile()

    return (
        <div className={"p-2 border-bottom"}>
            <div className={"border-0 m-0"}>
                <img className={'thumb-post img-responsive border-0'}
                     src={profile.image}
                     alt={profile.title}
                />
            </div>
        </div>
    );
}
export default UserProfile;