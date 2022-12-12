import React, { useEffect, useState }  from 'react';
import { getDataAPI } from '../../../utils/fetchData';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProfileUsers } from '../../../redux/actions/profileAction';
import Profile from './[id]';

const Posts = () => {
    const { id } = useParams()
    const [posts, setPosts] = useState([]);
    const [userData, setUserData] = useState([]);
    const { auth, profile } = useSelector(state => state)
    const dispatch = useDispatch()

    async function fetchData() {
        console.log(id.substring(1))
        const response = await getDataAPI(`user_posts/${id.substring(1)}`, auth.token);
        setPosts(response.data.posts)
    }



    useEffect(() => {
        if(auth.hasOwnProperty('token')) {
            
            dispatch(getProfileUsers({users: profile.users, id, auth}))
            const tempData = profile.users.filter(user => user._id === id.substring(1))
            if(tempData.length > 0) {
                if(tempData[0].hasOwnProperty('_id')) {
                    setUserData([tempData[0]])
                }

                fetchData();
            }

        }
    }, [id, auth, profile.users, dispatch])



    return (
        <div className = "posts">

            {
                posts.map(post => (
                    <div className="post-container" key={post._id}>
                        <Link to={`/post:${post._id}`}>
                            <img src={post.image} alt="" className="d-block mx-auto" />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts