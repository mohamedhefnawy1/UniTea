import React from 'react'
import Info from './Info'
import Posts from './Posts'
import './Profile.css'


export const Profile = () => {
  return (
    <div className="profile">
        <Info/>
        <br />
        <hr />
        <Posts/>
    </div>
  )
}

export default Profile