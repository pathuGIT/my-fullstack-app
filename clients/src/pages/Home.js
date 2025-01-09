import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/ApiService';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
        .then((response) => setPosts(response.data))
        .catch((error) => console.error('Error fetching posts:', error));
    }, [])

    return (
        <div>
            <h1>Posts</h1>

            <div class="posts">
                {posts.map((post) => (
                    <div class="post" key={post.id}>
                        <div class="option">
                            <button>Update</button>
                            <button>Delete</button>
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