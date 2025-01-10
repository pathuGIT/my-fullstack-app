import React, { useEffect, useState } from 'react'
import { fetchPosts, deletePost } from '../api/ApiService';
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
        .then((response) => setPosts(response.data))
        .catch((error) => console.error('Error fetching posts:', error));
    }, [])

    const handleDelete = (id) => {
        deletePost(id)
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error deleting item:', error));
        console.log(id)
    };

    return (
        <div>
            <h1>Posts</h1>

            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="option">
                            <button><Link to={`/update/${post.id}`}>Update</Link></button>
                            <button onClick={() => handleDelete(post.id)}>Delete</button>
                        </div>
                        <p>{post.title}</p>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home