import React from "react";
import {Link} from "react-router-dom";

const UserProfile = ({
                         profile = {
                             userId: "5772",
                             username: "dtollivr",
                             url: "dtolliver",
                             bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna \n" +
                                 "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n" +
                                 "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \n" +
                                 "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                             location: "Boston, MA",
                             lastLogIn: "2022-03-17",
                             image: "https://uploads4.wikiart.org/images/takashi-murakami/an-homage-to-ikb-1957-2011.jpg",
                         }
                     }) => {

    return (
        <>
            <div className={""}>
                <Link to={"../../tuiter/edit-profile"}
                      className={"btn btn-sm btn-primary rounded-pill float-end mt-2 mb-4"}>Edit Profile</Link>
                <h5 className={"m-0 p-0"}><strong>{profile.username}</strong></h5>
                <p className={"text-muted m-0 p-0 mb-1"}>@{profile.username}</p>
            </div>

            <div className={"text-muted small mb-1"}>
                <p className={"m-0 p-0 mb-1"}>{profile.bio}</p>
                <span className={"pe-4"}><i className="fa fa-map-marker"
                                            aria-hidden="true"/> {profile.location}</span>
                <span className={"pe-4"}> Last login {profile.lastLogIn}</span>
            </div>
        </>
    );
}
export default UserProfile;