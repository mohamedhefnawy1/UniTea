import {React, useEffect, useState }from 'react'
import './navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Navbar_dropdown from '../navbar_dropdown/navbar_dropdown';

import Logo from '../../../assets/UniTea-1.png'
import Post_img from '../../../assets/post_img.png'
import Profile_pic from '../../../assets/profile_pic.png'
import Down_btn from '../../../assets/down.png'

import Searchbar from '../searchbar/Search';
import Avatar from '../../pages/Profile/Avatar'
import Create_post from '../create_post/Create_post'

const Navbar = () => {

    const { auth, profile } = useSelector(state => state)
    const [User, setUser] = useState([])
    const [showCreatePost, setShowCreatePost] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(()=>{
        if(auth.hasOwnProperty('token')) {
            setUser(auth.user)
        }
    })
    return(
        <div className="main-container">
            <div className="nav">
                <a className='logo_holder' href="/">
                    <img id="logo" src={Logo} alt="" />
                </a>

                <div className="searchBarDiv">
                    <Searchbar></Searchbar>
                </div>

                <div className="nav_buttons">
                    <button id="createPost" onClick={() => setShowCreatePost(true)}>
                        <img className="nav_img" src={Post_img}  alt="" />
                    </button>
                    <Link to={`/profile:${User._id}`}>
                        <div>
                            <Avatar src={User.profilePic} size="medium-avatar"/>
                        </div>
                    </Link>
                    <button id="down_btn" onClick={() => setShowDropdown(!showDropdown)}>
                        <img className="nav_img" id="down_btn" src={Down_btn} alt="" />
                    </button>
                    {showDropdown && <Navbar_dropdown />}
                </div>
            </div>
        </div>
    );
};
export default Navbar