import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { postDataAPI } from "../../../utils/fetchData";
import { useSelector } from "react-redux";
import Navbar from "../navbar/navbar";

import './Create_post.css'

function CreatePost() {
    const navigate = useNavigate()

    const {auth} = useSelector(state => state)
    const [data, setData] = useState({
        content: "",
        image: "",
    })

    
    function create_Post() {
        const response = postDataAPI(`posts`, data , auth.token);

        navigate("/")
    }
    
    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <div className="create_post_holder">
            <Navbar />
            <div className="rightSide">
                <div className="formHolder">
                    <h1 className="createPostTitle"> Create Post</h1>
                    <form id="AddItem">
                        <label htmlFor="image">Image</label>
                        <div className="imgBoxHolder">
                            <input onChange={(e) => handle(e)} className='contentBox' id="image" name="image" placeholder="Enter Image Url..." type="text" />
                        </div>
                        <label htmlFor="content">Bio</label>
                        <div className="contentBoxHolder">
                            <input onChange={(e) => handle(e)} className='contentBox' id="content" name="content" placeholder="Enter bio..." type="text" />
                        </div>
                        <div className="submit_btn_holder">
                            <button className='submitBtn' type="button" onClick={() => create_Post()}>Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default CreatePost
