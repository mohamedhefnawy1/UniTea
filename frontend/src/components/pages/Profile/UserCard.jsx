import React from 'react'
import Avatar from './Avatar'
import './UserCard.css'
import { Link } from 'react-router-dom'

const UserCard = ({children, user, handleClose, setShowFollowers, setShowFollowing}) => {



    const handleCloseAll = () => {
        if(handleClose) handleClose()
        if(setShowFollowers) setShowFollowers(false)
        if(setShowFollowing) setShowFollowing(false)
    }

    return (
        <div className="d-flex p-2 align-item-center">
            <div>
            <Link to={`/profile:${user._id}`} onClick={handleCloseAll}
                    className="d-flex align-items-center">
                <div>
                    <Avatar src={user.profilePic} size="big-avatar"/>
                </div>
                <div className='username-text'>{user.username}</div>
            </Link>
            </div>
            
        </div>
    )
}

export default UserCard