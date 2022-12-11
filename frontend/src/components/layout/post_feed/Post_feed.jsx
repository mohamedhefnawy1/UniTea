import React from 'react'
import './Post_feed.css'

import like_button from '../../../assets/heart.png'
import send_button from '../../../assets/send.png'
import Post1 from '../../../assets/post1.jpg'

import Friend from '../friend/Friend';
import Comment from '../comment/Comment'

const Post_feed = () => {

    return(
        <div class="main_holder">
            <div className='post_head'>
                <div className="post_username"><Friend id='userBox' /></div>
                <div className="like_button_holder">
                    <button id='like_button'><img id='like_img' src={like_button} alt="" /></button>
                </div>
            </div>
            <div className='post_body'>
                <img id='posted_img' src={Post1} alt="" />
            </div>
            {/* <div className='comment_box'>
                <Comment id='userComment' />
            </div> */}
            <div className='post_footer'>
                {/* <input className="add_comment_box">Add comment</input> */}
                
                <div className="comment_holder">
                    <input type="text" id="comment_box" name="name" requiredminlength="15" placeholder='Add Comment!' size="25"></input>
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