import React, { useState } from "react";
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function CreatePost() {
    const history = useHistory();
    const [data, setData] = useState({
        content: "",
        image: "",
        likes: [],
        comments: [],
        user: {"_id": ""},
        _id: "",
        __v: "",
    })
    function create_Post() {


        fetch(`http://localhost:4000/api/posts`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                content: data.content,
                image: data.image,
                likes: [],
                comments: [],
                user:{_id: data.user._id } ,
                _id: data._id,
            }),
        })
        .then((response) => response.json())
        .then((result) => {
          if(result === "Created Successfully"){
            console.log("SUCCESS");
          }
          else{
            alert("Error! All fields are required!")
          }
        })
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
