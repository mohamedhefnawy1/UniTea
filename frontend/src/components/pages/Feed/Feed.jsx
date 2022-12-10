import React from 'react'
import Post_feed from '../../layout/post_feed/Post_feed';
import Sidebar from '../../layout/Sidebar/Sidebar';



const Feed = () => {

    return(
        
        <div className='row'>
            <div className="col-8">
                <div className="post_container d-flex justify-content-center">
                    <Post_feed />  
                </div>
            </div>
            
            <div className="col-4">
                <Sidebar />
            </div>
        </div>
    )
}
export default Feed