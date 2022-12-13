import React from 'react'
import './Friend.css'

import Profile_pic from '../../../assets/profile_pic.png'

const Friend = ({following}) => {

    return(
        <div className="friend_holder">
            <div className="profile_pic">
                <a href="/">
                    <img id="profile_pic" src={following.profilePic} alt="" />
                </a>
            </div>
            <a href="/" id="friend_username">{following.username}</a>
        </div>
    );
};
export default Friend