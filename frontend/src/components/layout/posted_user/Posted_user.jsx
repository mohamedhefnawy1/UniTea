import React from 'react'
import Avatar from '../../pages/Profile/Avatar'
import './Posted_user.css'
import { Link } from 'react-router-dom'

const Posted_user = ({user}) => {

    return (
        <div className="d-flex p-2 align-item-center">
            <div>
            <Link to={`/profile:${user._id}`} className="d-flex align-items-center" style={{ textDecoration: 'none' }}>
                <div>
                    <Avatar src={user.profilePic} size="big-avatar"/>
                </div>
                <div className='username-text'>{user.username}</div>
                {/* <div>
                    <a>{user.username}</a>
                </div> */}
            </Link>
            </div>
            
        </div>
    )
}

export default Posted_user