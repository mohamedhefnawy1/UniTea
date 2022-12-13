import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { postDataAPI } from "../../../utils/fetchData";
import { useSelector } from "react-redux";

function CreatePost() {
    const {auth} = useSelector(state => state)
    const [data, setData] = useState({
        content: "",
        image: "",
    })

    
    function create_Post() {
        const response = postDataAPI(`posts`, data , auth.token);
        console.log(response.data.)    
    }
    
    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }



    return (
        <div className="signin">
            <div
                className="leftSide"
            ></div>
            <div className="rightSide">
                <h1> Add New Item</h1>
                <form id="AddItem">
                    {/* <label htmlFor="name">Full Name</label> */}
                    {/* <input name="name" placeholder="Enter full name..." type="text" /> */}
                    <label htmlFor="content">Content</label>
                    <input onChange={(e) => handle(e)} id="content" name="content" placeholder="Enter Content..." type="text" />
                    <label htmlFor="image">Image</label>
                    <input onChange={(e) => handle(e)} id="image" name="image" placeholder="Enter Image..." type="text" />
                    <div className="rightSide">
                        <div>
                            <button type="button" onClick={() => create_Post()}>Submit</button>
                        </div>

                    </div>


                </form>
            </div>
        </div>
    )
}

export default CreatePost
