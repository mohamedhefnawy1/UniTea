import React from 'react'
import './Sidebar.css'

import Profile_pic from '../../../assets/profile_pic.png'

import Friend from '../friend/Friend';
import Suggested_Friend from '../suggested_friend/Suggested_Friend';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDataAPI } from '../../../utils/fetchData';

const Sidebar = () => {

    const [suggestedUsers, setSuggestedUsers] = useState([]);

    async function fetchData() {
        const suggestedFriendsResponse = await getDataAPI('suggestionsUser', auth.token);
        setSuggestedUsers(suggestedFriendsResponse.data.users)
    }
    
    const {auth} = useSelector(state => state)

    useEffect(()=>{
        fetchData();
    }, [auth])

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
                {suggestedUsers && suggestedUsers.map(( user => (
                        <div> <Suggested_Friend user={user}/>
                        </div>
                )))}
                {/* <Suggested_Friend />
                <Suggested_Friend />
                <Suggested_Friend /> */}

            </div>
        </div>
    );
};
export default Sidebar