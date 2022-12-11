import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { follow, unfollow } from '../../../redux/actions/profileAction'

const Follow = ({user}) => {
    const [followed, setFollowed] = useState(false)

    const { auth, profile } = useSelector(state => state)
    const dispatch = useDispatch()


    useEffect(() => {
        if(auth.user.following.find(item => item._id === user._id)) {
            setFollowed(true)
        }
    })

    const handleFollow = () => {
        setFollowed(true)
        dispatch(follow({users: profile.users, user, auth}))
    }

    const handleUnFollow = () => {
        setFollowed(false)
        dispatch(unfollow({users: profile.users, user, auth}))

    }


    return (
        <>
        {
            followed
            ? <a onClick={handleUnFollow}>Unfollow</a>
            : <a onClick={handleFollow}>Follow</a>
        }
        
        </>
    )
}

export default Follow
