import React from "react";
import AdminEditProfileModal from "./AdminEditProfileModal";

const UserListItem = ({user}) => {
    return (
        <div className={"card bg-primary mb-2 text-white"}>
            <div className="card-header d-flex justify-content-between align-items-center p-1 ">
                <h5 className={"m-0"}>
                    <strong>{user.username}</strong>
                </h5>
                <AdminEditProfileModal user={user}/>
            </div>
            <div className={"card-body p-1"}>
                {user.email}
            </div>

        </div>
    )
}

export default UserListItem
