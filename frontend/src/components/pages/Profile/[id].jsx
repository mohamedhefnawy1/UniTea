import React from 'react'
import Info from './Info'
import Posts from './Posts'
import './Profile.css'
import Navbar from '../../layout/navbar/Navbar';

export const Profile = () => {
  return (
    <div className="profile">
        <Navbar />

        <Info/>
        <br />
        <hr />
        <Posts/>
    </div>
  )
}

export default Profile