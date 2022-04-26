import React from "react";

const UserGridItem = ({user}) => {

    return (
        <div className={"border-0"}>
            <a href={`/profile/${user._id}`} className={"d-flex align-items-center mb-2 text-decoration-none boder-0 text-primary"}>
                    {user.hasOwnProperty("image") === false || user.image === "" ?
                        <i className={"m-0 p-0 fa fa-2x fa-user-circle"} aria-hidden="true"/>
                        :
                        <img className={'card-img-top rounded-circle'} src={user.icon} alt={user.username}/>
                    }
                    <span className={"text-dark text-decoration-none border-0 text-center m-0 ps-3 p-0"}>{user.username}</span>
            </a>
        </div>
    )
}

export default UserGridItem;