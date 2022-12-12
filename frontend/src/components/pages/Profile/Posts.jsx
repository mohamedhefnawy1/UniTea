import React, { useEffect, useState }  from 'react';
import { getDataAPI } from '../../../utils/fetchData';
import { useSelector } from 'react-redux';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const { auth } = useSelector(state => state)

    async function fetchData() {
        const response = await getDataAPI('posts', auth.token);
        setPosts(response.data.posts)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className = "posts">
            {
                posts.map(post => (
                    <h1>{post.content}</h1>
                ))
            }
        </div>
    )
}

export default Posts