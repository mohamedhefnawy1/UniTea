import React from 'react'
import './Post_feed.css'

import like_button from '../../../assets/like1.png'
import like_button2 from '../../../assets/like2.png'
import send_button from '../../../assets/send.png'
import Post1 from '../../../assets/post1.jpg'
import Post2 from '../../../assets/wallpaper.jpg'


import UserCard from '../../pages/Profile/UserCard'
import Friend from '../friend/Friend';
import Comment from '../comment/Comment'
import Posted_user from '../posted_user/Posted_user'

import { useSelector } from 'react-redux';
import { getDataAPI, postDataAPI , patchDataAPI} from '../../../utils/fetchData'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'


const Post_feed = ({id}) => {

    const [postInfo, setPostInfo] = useState([]);
    const [Like, setLike] = useState([]);
    const [LikeCounter, setLikeCounter] = useState([]);
    const [commentCounter, setCommentCounter] = useState([]);
    const {auth} = useSelector(state => state)

    const [comment, setComment] = useState({
        postId: id,
        content: "",
        tag: ""
    })

    
    function create_Comment() {
        const response = postDataAPI(`comment`, comment , auth.token);
        window.location.reload(false)

    }
    
    function handle(e) {
        const newData = { ...comment }
        newData[e.target.id] = e.target.value
        setComment(newData)
        console.log(newData)
    }

    // let bool = 0;
    // function toggleLike(e)
    // {
    //     console.log(document.getElementById("like_img").src)
    //     if(bool == 0){
    //         document.getElementById("like_img").src=like_button2;
    //         bool = 1
    //     }
    //     else{
    //         document.getElementById("like_img").src = like_button
    //         bool = 0
    //     }
       
    // }

    function toggleLike(){
        let res = patchDataAPI(`post/${id}/like`, {}, auth.token);
    }

    async function fetchData() {
        // console.log(id)
        const response = await getDataAPI(`post/${id}`, auth.token);
        setPostInfo(response.data.post)
        setLikeCounter(response.data.post.likes.length)
        setCommentCounter(response.data.post.comments.length)
        // console.log(response.data.post)
    }

    useEffect(()=>{
        fetchData();
    }, [auth])

    // let numOfLikes = postInfo.likes.length
    // console.log("postInfo = "+ postInfo.likes.length)

    // const numOfLikes = postInfo.likes.length

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
                    <button onClick={()=>toggleLike()}id='like_button'><img id='like_img' src={like_button} alt="" /></button>
                    {/* <img src="https://i.stack.imgur.com/ZUcU8.jpg" id="like_button"/> */}
                </div>
            </div>
            <div className='post_body'>
                <Link to={`/post:${postInfo._id}`}>
                    <img id='posted_img' src={postInfo.image} alt="" />
                </Link>
            </div>
            <div className='bio_box'>
                {postInfo.content}
                
            </div>
            <div className='post_footer'>
                {/* <input className="add_comment_box">Add comment</input> */}
                
                <div className="comment_holder">
                    <input onChange={(e) => handle(e)}  type="text" id="content" name="name" requiredminlength="15" placeholder='Add Comment!' size="25"></input>
                    {/* onClick={() => create_Comment()} */}
                    <button onClick={() => create_Comment()} id='send_button'><img id='send_img' src={send_button} alt="" /></button>
                </div>
                <div className="footerInfoHolder">
                    <div className="numberOfLikes">{LikeCounter} Likes</div>
                    <div className="numberOfComments">{commentCounter} Comments</div>
                </div>
                
            </div>
        </div>
    );
};
export default Post_feed