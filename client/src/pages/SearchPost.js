import React, { useEffect, useState } from 'react'
import { fetchPostByTitle } from '../api/ApiService';
import { useParams} from 'react-router-dom'


function SearchPost() {
    const { title } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetchPostByTitle(title)
            .then((response) => {
                setPost(response.data)
                console.log(response.data)
            })
            .catch((error) => console.error('Error search post:', error));
    }, [title])

    return (
        <div className='posts'>
            <h2>SearchPost</h2>
            {post.map((post)=>(
                <div className="post" key={post._id}>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                </div>
            ))}
            
        </div>
    )
}

export default SearchPost