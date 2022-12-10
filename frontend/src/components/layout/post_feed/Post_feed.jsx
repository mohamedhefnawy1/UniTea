import React from 'react'
import './Post_feed.css'

import like_button from '../../../assets/like.png'

import Friend from '../friend/Friend';
import Comment from '../comment/Comment'

const Post_feed = () => {

    return(
        <div className="main_holder">
            <div className='post_head'>
                <Friend id='userBox' />
                <button id='like_button'><img src={like_button} alt="" /></button>
            </div>
            <div className='post_body'>
                <img id='posted_img' src={like_button} alt="" />
            </div>
            <div className='comment_box'>
                <Comment id='userComment' />
            </div>
            <div className='post_footer'>
                {/* <input className="add_comment_box">Add comment</input> */}
                <input type="text" id="name" name="name" requiredminlength="4" placeholder='Add Comment!' size="10"></input>
                <div className="numberOfLikes"></div>
                <div className="numberOfComments"></div>
            </div>
        </div>
    );
};
export default Post_feed