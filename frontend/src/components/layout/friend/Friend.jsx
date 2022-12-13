import React from 'react'
import './Friend.css'
import { Link } from 'react-router-dom';

import Profile_pic from '../../../assets/profile_pic.png'

const Friend = ({following}) => {

    return(
        <div className="friend_holder">
            <div className="profile_pic">
                <Link to={`/profile:${following._id}`}>
                    <img id="profile_pic" src={following.profilePic} alt="" />
                </Link>
            </div>
            <Link to={`/profile:${following._id}`} style={{ textDecoration: 'none' }}>
                <div id="friend_username">{following.username}</div>
            </Link>
        </div>
    );
};
export default Friend