import React, { useEffect, useState } from 'react'
import { fetchPost } from '../api/ApiService';
import { useParams} from 'react-router-dom'


function SearchPost() {
    const { id } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetchPost(id)
            .then((response) => setPost(response.data))
            .catch((error) => console.error('Error search post:', error));
    }, [id])

    return (
        <div className='posts'>
            <h2>SearchPost</h2>
            <div className="post" key={post.id}>
                <p>{post.title}</p>
                <p>{post.content}</p>
            </div>
        </div>
    )
}

export default SearchPost