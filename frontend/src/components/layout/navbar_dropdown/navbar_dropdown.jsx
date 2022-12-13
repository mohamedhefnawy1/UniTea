import React from 'react'
import UserCard from './UserCard'
import { useSelector } from 'react-redux'



const Navbar_dropdown = ({users, setShowFollowers}) => {
    const { auth } = useSelector(state => state)    

    return (
        <div className="Navbar_dropdown">
            <div className="dropdown_box">
                <button className='edit_profile_btn'></button>
                <button className='log_out_btn'></button>
            </div>
        </div>
    )
}

export default Followers