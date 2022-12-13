import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './EditProfile.css'
import { updateProfile } from '../../../redux/actions/profileAction'
import { patchDataAPI } from '../../../utils/fetchData'

const EditProfile = ({user, setOnEdit}) => {
    const initialState = {
        story: '', username: '', profilePic: ''
    }

    const dispatch = useDispatch()

    const [userData, setUserData] = useState(initialState)
    const { story, username, profilePic} = userData

    // const [profilePic, setProfilePic] = useState('')

    const { auth } = useSelector(state => state)
    const changeAvatar = () => {

    }

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userData.username)
        patchDataAPI(`user`, {
            story: userData.story,
            username: userData.username,
            profilePic: userData.profilePic
        }, auth.token)
        .then((response) => console.log(response))
        .catch((err) => {console.log(err)})

        window.location.reload(false)
    }


    return (
        <div className="edit">

            <div className="edit_profile">
                <button className="btn-danger btn btn-sm"
                onClick={() => setOnEdit(false)}>
                    Close
                </button>

                <form onSubmit ={handleSubmit}>
                    <div className="info_avatar">
                        <img src={auth.user.profilePic} alt="profilePic" />
                    </div>


                    <div className="form_group">
                        <label htmlFor="story">Enter an image url</label>
                        <div>
                            <input type="text" name="profilePic" value={profilePic} className="form-control" onChange={handleInput} cols="10" rows="4"/>
                        </div>
                    </div>
                    <div className="form_group">
                        <label htmlFor="story">Edit Profile bio</label>
                        <div>
                            <textarea name="story" value={story} className="form-control" onChange={handleInput} cols="10" rows="4"/>
                        </div>
                    </div>
                    <div className="form_group">
                        <label htmlFor="username">Update Username</label>
                        <div>
                            <input type="text" className="form-control" id="username" name="username" value={username} onChange={handleInput} />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>


                </form>


            </div>
        </div>
    )
}

export default EditProfile
