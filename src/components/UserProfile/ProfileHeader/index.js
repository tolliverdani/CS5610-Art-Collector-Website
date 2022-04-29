import React from "react";

const ProfileHeader = ({profile}) => {

    return (
        <>
            <div className={"d-flex align-items-center p-2"}>
                {profile.hasOwnProperty("image") === false || profile.image === "" ?
                    <i className={"m-0 p-0 fa fa-2x fa-user-circle"} aria-hidden="true"/>
                    :
                    <img className={'thumb-post img-responsive rounded-circle border-0'}
                         src={profile.image}
                         alt={profile.title}
                    />
                }
                <h5 className={"m-0 ps-3 p-0"}><strong>{profile.username}</strong></h5>
            </div>
        </>
    );
}
export default ProfileHeader;