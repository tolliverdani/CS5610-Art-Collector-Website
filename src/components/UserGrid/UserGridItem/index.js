import React from "react";

const UserGridItem = ({user}) => {

    return (
        <div className={"border-0 gy-1"}>
            <a href={"/#"}>
                <img className={'card-img-top rounded-circle'} src={user.profile_image} alt={user.username}/>
            </a>
        </div>
    )
}

export default UserGridItem;