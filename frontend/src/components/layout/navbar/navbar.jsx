import React from 'react'
import './Navbar.css'

import Logo from '../../../assets/UniTea-1.png'
import Post_img from '../../../assets/post_img.png'
import Profile_pic from '../../../assets/profile_pic.png'
import Down_btn from '../../../assets/down.png'

const Navbar = () => {

    return(
        <div className="main-container">
            <div className="nav">
                <a href="/">
                    <img id="logo" src={Logo} alt="" />
                </a>
                <div className="nav_buttons">
                    <button id="createPost">
                        <img className="nav_img" src={Post_img} alt="" />
                    </button>
                    <button id="nav_profile_btn">
                        <img className="nav_img" src={Profile_pic} alt="" />
                    </button>
                    <button id="down_btn">
                        <img className="nav_img" src={Down_btn} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Navbar