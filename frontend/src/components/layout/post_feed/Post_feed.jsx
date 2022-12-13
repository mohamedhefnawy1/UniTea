import React from 'react'
import './Post_feed.css'

import like_button from '../../../assets/heart.png'
import send_button from '../../../assets/send.png'
import Post1 from '../../../assets/post1.jpg'
import Post2 from '../../../assets/wallpaper.jpg'

import UserCard from '../../pages/Profile/UserCard'
import Friend from '../friend/Friend';
import Comment from '../comment/Comment'
import Posted_user from '../posted_user/Posted_user'

import { useSelector } from 'react-redux';
import { getDataAPI, postDataAPI } from '../../../utils/fetchData'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'


const Post_feed = ({id}) => {

    const [postInfo, setPostInfo] = useState([]);
    const {auth} = useSelector(state => state)

    const [comment, setComment] = useState({
        postId: id,
        content: "",
        tag: ""
    })

    
    function create_Comment() {
        const response = postDataAPI(`comment`, comment , auth.token);
    }
    
    function handle(e) {
        const newData = { ...comment }
        newData[e.target.id] = e.target.value
        setComment(newData)
        console.log(newData)
    }

    async function fetchData() {
        console.log(id)

        const response = await getDataAPI(`post/${id}`, auth.token);
        setPostInfo(response.data.post)
        console.log(response.data.post)
    }

    useEffect(()=>{
        fetchData();
    }, [auth])

    return(
        <div className="main_holder">
            <div className='post_head'>
                {/* <UserCard user={postInfo.user} id='userBox' /> */}
                
                <div className="post_username">
                    
                    {postInfo.user && <Posted_user user={postInfo.user }/>}
                    {/* <Link to={`/profile:${postInfo.user._id}`}>
                        <img src={postInfo.user.profilePic} alt="" />
                        <link className="username">moe</link>
                    </Link>     */}
                </div>
                <div className="like_button_holder">
                    <button id='like_button'><img id='like_img' src={like_button} alt="" /></button>
                </div>
            </div>
            <div className='post_body'>
                <img id='posted_img' src={postInfo.image} alt="" />
                
            </div>
            <div className='bio_box'>
                {postInfo.content}
            </div>
            <div className='post_footer'>
                {/* <input className="add_comment_box">Add comment</input> */}
                
                <div className="comment_holder">
                    <input onChange={(e) => handle(e)}  type="text" id="content" name="name" requiredminlength="15" placeholder='Add Comment!' size="25"></input>
                    {/* onClick={() => create_Comment()} */}
                    <button id='send_button'><img id='send_img' src={send_button} alt="" /></button>
                </div>
                <div className="footerInfoHolder">
                    <div className="numberOfLikes">Likes</div>
                    <div className="numberOfComments">Comments</div>
                </div>
                
            </div>
        </div>
    );
};
export default Post_feed