import React from 'react'
import './Post.css'

import like_button from '../../../assets/like1.png'
import like_button2 from '../../../assets/like2.png'
import send_button from '../../../assets/send.png'
import Post1 from '../../../assets/post1.jpg'
import Post2 from '../../../assets/wallpaper.jpg'

import UserCard from '../../pages/Profile/UserCard'
import Friend from '../../layout/friend/Friend'
import Comment from '../../layout/comment/Comment'
import Posted_user from '../../layout/posted_user/Posted_user'

import { useSelector } from 'react-redux';
import { getDataAPI } from '../../../utils/fetchData'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { postDataAPI, patchDataAPI } from '../../../utils/fetchData'



const Post_detailed = ({id}) => {

    const [postInfo, setPostInfo] = useState([]);
    const {auth} = useSelector(state => state)
    const [LikeCounter, setLikeCounter] = useState([]);
    const [commentCounter, setCommentCounter] = useState([]);

    async function fetchData() {
        console.log(id)

        const response = await getDataAPI(`post/${id}`, auth.token);
        setPostInfo(response.data.post)
        setLikeCounter(response.data.post.likes.length)
        setCommentCounter(response.data.post.comments.length)
    }

    useEffect(()=>{
        fetchData();
    }, [auth])

        

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

    let bool = 0;
    function toggleLike()
    {
        console.log(document.getElementById("like_img").src)

        if(bool == 0){
            document.getElementById("like_img").src=like_button2;
            patchDataAPI(`post/${id}/like`, {}, auth.token);
            bool = 1
        }
        else{
            document.getElementById("like_img").src = like_button
            patchDataAPI(`post/${id}/unlike`, {}, auth.token);
            bool = 0
        }
    }

    return(
        <div className="main_holder">
            <div className='post_head'>
                {/* <UserCard user={postInfo.user} id='userBox' /> */}
                
                <div className="post_username">
                    
                    {postInfo.user && <Posted_user user={postInfo.user }/>}

                </div>
                <div className="like_button_holder">
                    <button id='like_button' onClick={()=>toggleLike()}><img id='like_img' src={like_button} alt="" /></button>
                </div>
            </div>
            <div className='post_body'>
                <img id='posted_img' src={postInfo.image} alt="" />
                
            </div>
            <div className='bio_box'>
                {postInfo.content}
            </div>
            <div className="comment-box">
                {
                    postInfo.comments && postInfo.comments.map(comment => (
                        <Comment commentInfo={comment} />
                    ))
                }

            </div>
            <div className='post_footer'>
                {/* {postInfo.commentpostInfo.comments[0]} */}
                {/* <input className="add_comment_box">Add comment</input> */}
                
                <div className="comment_holder">
                    <input onChange={(e) => handle(e)} type="text" id="content" name="name" requiredminlength="15" placeholder='Add Comment!' size="25"></input>
                    <button id='send_button' onClick={() => create_Comment()} ><img id='send_img' src={send_button} alt="" /></button>
                </div>
                <div className="footerInfoHolder">
                    <div className="numberOfLikes">{LikeCounter} Likes</div>
                    <div className="numberOfComments">{commentCounter} Comments</div>
                </div>
                
            </div>
        </div>
    );
};
export default Post_detailed