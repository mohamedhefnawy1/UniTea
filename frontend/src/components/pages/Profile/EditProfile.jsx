import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import './EditProfile.css'

const EditProfile = ({user, setOnEdit}) => {
    const initialState = {
        bio: '',
        username: '',
        email: '',
        password: ''
    }

    const [userData, setUserData] = useState(initialState)
    const { bio, username, email, password } = userData

    const [profilePic, setProfilePic] = useState('')

    const { auth } = useSelector(state => state)
    const changeAvatar = () => {

    }

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value })
    }


    return (
        <div className="edit_profile">
            <button className="btn btn-danger btn_close"
            onClick={() => setOnEdit(false)}>
                Close
            </button>

            <form>
                <div className="info_avatar">
                    <img src={profilePic ? URL.createObjectURL(profilePic) : auth.user.profilePic} alt="profilePic" />
                    <span>
                        <i className = "fas fa-camera" />
                        <p>change</p>
                        <input type="file" name="file" id="file_up" 
                        accept="image/*" onChange={changeAvatar} />
                    </span>
                </div>



                <div className="form_group">
                    <label htmlFor="bio">Edit Profile bio</label>
                    <div>
                        <textarea name="bio" value={bio} className="form-control" onChange={handleInput} cols="10" rows="4"/>
                    </div>
                </div>
                <div className="form_group">
                    <label htmlFor="username">Update Username</label>
                    <div>
                        <input type="text" className="form-control" id="username" name="username" value={username} onChange={handleInput} />
                    </div>
                </div>
                <div className="form_group">
                    <label htmlFor="username">Update Email</label>
                    <div>
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleInput} />
                    </div>
                </div>
                <div className="form_group">
                    <label htmlFor="username">Update Password</label>
                    <div>
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleInput} />
                    </div>
                </div>
            </form>


        </div>
    )
}

export default EditProfile
