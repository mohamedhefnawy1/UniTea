import React from "react";
import Avatar from "../../pages/Profile/Avatar";

const SearchUser = ({user}) => {
    return (
        <div className="d-flex p-2 align-item-center">
            <Avatar src={user.profilePic} size="big-avatar"/>
            <div className="m1-1">
                <span className="d-block">{user.username}</span>
            </div>
        </div>
    )
}

export default SearchUser