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
                <p className={"m-0"}><strong>Username: </strong>{user.username}</p>
                <p className={"m-0"}><strong>Email: </strong>{user.email}</p>
                <p className={"m-0"}><strong>Date Joined: </strong>{new Date(user.joined).toLocaleDateString()}</p>
            </div>

        </div>
    )
}

export default UserListItem
