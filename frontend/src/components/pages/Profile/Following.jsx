import React from 'react'
import UserCard from './UserCard'
import { useSelector } from 'react-redux'



const Following = ({users, setShowFollowing}) => {
    const { auth } = useSelector(state => state)    

    return (
        <div className="follow">
            <div className="follow_box">
                <h5>Following</h5>
                <hr />
                <div className="follow_list">
                    {
                        users.map(user => (
                            <UserCard key={user._id} user={user} setShowFollowing={setShowFollowing}/>
                        ))

                    }

                </div>
                <div className="close">
                    <button className='btn btn-info' onClick={() => setShowFollowing(false)}>Exit List</button>
                </div>


            </div>
        </div>
    )
}

export default Following