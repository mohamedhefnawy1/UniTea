import React, { useEffect,useState } from 'react'
import './Post.css'

import Sidebar from '../../layout/Sidebar/Sidebar';
import Navbar from '../../layout/navbar/navbar';
import Post_detailed from './Post_detailed';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams()

    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const {auth} = useSelector(state => state)

    // async function fetchData() {
    //     const suggestedFriendsResponse = await getDataAPI('suggestionsUser', auth.token);
    //     setSuggestedUsers(suggestedFriendsResponse.data.users)
    // }

    // useEffect(()=>{
    //     if(auth.hasOwnProperty("token")){
    //         fetchData();
    //     }
    // }, [auth])

    return(
        <div className='row no-gutters'>
            <Navbar />
            <div className="col-md-10">
                <div className="post_holder">
                        <div className="post_feed_holder d-flex justify-content-center" >
                            <Post_detailed id={id.substring(1)}/>
                        </div>
                </div>
            </div>
            
            <div className="col-2 d-md-block">
                <div className="sidebar_holder d-flex justify-content-end">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
export default Post