import React, { useEffect,useState } from 'react'
import Post_feed from '../../layout/post_feed/Post_feed';
import Sidebar from '../../layout/Sidebar/Sidebar';
import AdminNavbar from '../../layout/admin_navbar/admin_navbar';

import './AdminFeed.css'

import { useSelector } from 'react-redux';
import { getDataAPI } from '../../../utils/fetchData'

const AdminFeed = () => {

    const [posts, setPosts] = useState([]);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const {auth} = useSelector(state => state)

    async function fetchData() {
        const postResponse = await getDataAPI('posts', auth.token);
        const suggestedFriendsResponse = await getDataAPI('suggestionsUser', auth.token);
        setPosts(postResponse.data.posts)
        setSuggestedUsers(suggestedFriendsResponse.data.users)
        console.log(postResponse.data.posts)
    }

    useEffect(()=>{
        if(auth.hasOwnProperty("token")){
            fetchData();
        }
    }, [auth])

    return(
        <div className='row no-gutters'>
            <AdminNavbar />
            <div className="col-8 sm-auto">
                <div className="post_holder">
                    {posts.map(post=> (
                        <div className="post_feed_holder" key={post._id}>
                            <Post_feed id={post._id}/>
                        </div>
                    ))}
                      
                </div>
            </div>
            
            <div className="col-4 d-sm-none d-md-block">
                <div className="sidebar_holder d-flex justify-content-end">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
export default AdminFeed;