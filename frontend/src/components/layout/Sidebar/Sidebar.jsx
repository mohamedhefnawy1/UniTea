import React from 'react'
import './Sidebar.css'

import Profile_pic from '../../../assets/profile_pic.png'

import Friend from '../friend/Friend';
import Suggested_Friend from '../suggested_friend/Suggested_Friend';

const Sidebar = () => {

    return(
        <div className="Sidebar">
            <div className="user_friends">
                <Friend />
                <Friend />
                <Friend />
                <Friend />
            </div>
            <div className="suggested_friends">
                <Suggested_Friend />
            </div>
        </div>
    );
};
export default Sidebar