import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Avatar from './Avatar';
import EditProfile from './EditProfile';
import { getProfileUsers } from '../../../redux/actions/profileAction';
import Follow from './Follow';
import Following from './Following';
import Followers from './Followers';


const Info = () => {
    const { id } = useParams()
    const { auth, profile } = useSelector(state => state)
    const dispatch = useDispatch()
    const [userData, setUserData] = useState([]) 
    const [onEdit, setOnEdit] = useState(false)

    const [showFollowers, setShowFollowers] = useState(false)
    const [showFollowing, setShowFollowing] = useState(false)


    useEffect(() => {
        if(auth.hasOwnProperty('token')) {
            
            dispatch(getProfileUsers({users: profile.users, id, auth}))
            const newData = profile.users.filter(user => user._id === id.substring(1))
            if(newData.length > 0) {
                if(newData[0].hasOwnProperty('_id')) {
                    setUserData([newData[0]])
                }
            }
            
            
        }


    }, [id, auth, dispatch, profile.users])

    return (
        <div className="info">
            {   
                    userData.map(user => (
                        <div className="info_container" key={user._id}>
                            <Avatar src={user.profilePic} size = "largest-avatar"/>

                            <div className="info_content">

                                <div className="info_content_title">
                                    <h2>{user.username}</h2>
                                    {
                                        user._id === auth.user._id
                                        ?  <a href="#" onClick={() => setOnEdit(true)}>
                                            Edit Profile
                                        </a>
                                        
                                        : <Follow user={user}/>
                                    }
                                    
                                    
                                </div>

                                <div className="info_follow">
                                    <span className='mr-3' onClick={() => setShowFollowers(true)}>
                                        {user.followers.length} Followers     
                                    </span>
                                    <span className='mr-5' onClick={() => setShowFollowing(true)}>
                                        {user.following.length} Following
                                    </span>
                                </div>
                                <p>{user.story}</p>
                            </div>

                            {/* {
                                onEdit && 
                                <EditProfile 
                                user={user} 
                                setOnEdit={setOnEdit} 
                                />
                            } */}


                            {
                                showFollowers && 
                                <Followers users={user.followers} setShowFollowers={setShowFollowers}/>
                            }
                            {
                                showFollowing && 
                                <Following users={user.following} setShowFollowing={setShowFollowing} />
                            }
                        
                        
                        
                        
                        </div>
                    ))
                }
        </div>
    )
}

export default Info