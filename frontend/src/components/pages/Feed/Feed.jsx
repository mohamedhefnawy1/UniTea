import React from 'react'
import Post_feed from '../../layout/post_feed/Post_feed';
import Sidebar from '../../layout/Sidebar/Sidebar';



const Feed = () => {

    return(
        <div className='row no-gutters'>
            <div className="col-8">
                <div className="post_holder d-flex justify-content-center">
                    <Post_feed />  
                </div>
                <div className="post_holder d-flex justify-content-center">
                    <Post_feed />
                </div>
            </div>
            
            <div className="col-4">
                <div className="sidebar_holder d-flex justify-content-end">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
export default Feed