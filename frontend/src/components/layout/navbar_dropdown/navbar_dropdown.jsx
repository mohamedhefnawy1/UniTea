import React from 'react'
import './navbar_dropdown.css'


const Navbar_dropdown = () => {  

    return (
        <div className="Navbar_dropdown">
            <div className="dropdown_box">
                <button className='edit_profile_btn'>Edit Profile</button>
                <button className='logout_btn'>Log Out</button>
            </div>
        </div>
    )
}

export default Navbar_dropdown