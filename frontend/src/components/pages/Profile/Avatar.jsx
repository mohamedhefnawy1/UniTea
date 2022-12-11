import React from 'react'
import './Avatar.css'

const Avatar = ({src, size}) => {
  return (
    <img src={src} alt="profilePic" className={size} />
  )
}

export default Avatar
