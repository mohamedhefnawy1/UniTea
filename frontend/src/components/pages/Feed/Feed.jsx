import React from 'react'
import Post_feed from '../../layout/post_feed/Post_feed';
import Sidebar from '../../layout/Sidebar/Sidebar';
import Navbar from '../../layout/navbar/Navbar';

import getDataAPI from '../../../utils/fetchData'
import { refreshToken } from '../../../redux/actions/authAction';

const Feed = () => {

    getDataAPI('http://localhost:4000/api/posts', refreshToken)

    return(
        <div className='row no-gutters'>
            <Navbar />
            <div className="col-8 sm-auto">
                {/* <div className="top vh-50"></div> */}
                <div className="post_holder d-flex justify-content-center">
                    <Post_feed />  
                </div>
                <div className="post_holder d-flex justify-content-center">
                    <Post_feed />
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
export default Feed