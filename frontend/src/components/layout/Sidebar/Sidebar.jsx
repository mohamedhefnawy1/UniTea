import React from 'react'
import './Sidebar.css'

import Profile_pic from '../../../assets/profile_pic.png'

import Friend from '../friend/Friend';
import Suggested_Friend from '../suggested_friend/Suggested_Friend';

const Sidebar = () => {

    return(
        <div className="Sidebar">
            <div className="user_friends">
                <div className="user_friends_title">Friends</div>
                <Friend />
                <Friend />
                <Friend />
                <Friend />
            </div>
            <div className="suggested_friends">
                <div className="suggested_friends_title">Suggested Friends</div>
                <Suggested_Friend />
                <Suggested_Friend />
                <Suggested_Friend />
                <Suggested_Friend />

            </div>
        </div>
    );
};
export default Sidebar