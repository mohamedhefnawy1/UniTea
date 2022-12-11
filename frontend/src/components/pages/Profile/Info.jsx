import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Avatar from './Avatar';


const Info = () => {
    const { id } = useParams()
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(auth.user)
    const [userData, setUserData] = useState([]) 
    useEffect(() => {
        if(auth.hasOwnProperty('token')) {
            if(id.substring(1) === auth.user._id) {
                setUserData([auth.user])
                console.log("current user")
            } else {
                console.log("other user")
            }
        }

    }, [id, auth.user])


    return (
        <div className="Info">
            {   
                
                    userData.map(user => (
                        <div className="info_container" key={user._id}>
                            <Avatar src={user.profilePic}/>
                                <div className="info_content_title">
                                    <h2>{user.username}</h2>
                                    <button className="btn btn-outline-info">
                                        Edit Profile
                                    </button>
                                </div>

                                <div>
                                    <span>
                                        {user.followers.length} Followers
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {user.following.length} Following
                                    </span>
                                </div>


                        </div>
                    ))
                }
            
        </div>
    )
}

export default Info