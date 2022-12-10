import React from 'react'
import './Post_feed.css'

import like_button from '../../../assets/like.png'
import Post1 from '../../../assets/post1.jpg'

import Friend from '../friend/Friend';
import Comment from '../comment/Comment'

const Post_feed = () => {

    return(
        <div class="main_holder">
            <div className='post_head'>
                <div className="post_username"><Friend id='userBox' /></div>
                <button id='like_button'><img id='like_img' src={like_button} alt="" /></button>
            </div>
            <div className='post_body'>
                <img id='posted_img' src={Post1} alt="" />
            </div>
            {/* <div className='comment_box'>
                <Comment id='userComment' />
            </div> */}
            <div className='post_footer'>
                {/* <input className="add_comment_box">Add comment</input> */}
                
                <input type="text" id="comment_box" name="name" requiredminlength="15" placeholder='Add Comment!' size="25"></input>
                <div className="footerInfoHolder">
                    <div className="numberOfLikes">Likes</div>
                    <div className="numberOfComments">Comments</div>
                </div>
                
            </div>
        </div>
    );
};
export default Post_feed