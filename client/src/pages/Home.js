import React, { useEffect, useState } from 'react'
import { fetchPosts, deletePost } from '../api/ApiService.js';
import { Link, useNavigate } from 'react-router-dom'
function Home() {
    const [posts, setPosts] = useState([]);
    const [limitCont, setLimitCount] = useState(0);
    const [searchTitle, setSearchTitle] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts({ limit: 0 })
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error fetching posts:', error));
            
    }, [])

    const handleDelete = (id) => {
        deletePost(id)
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error deleting item:', error));
        console.log(id)
    };

    const handleLimit = () => {
        fetchPosts({ limit: limitCont })
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error limit posts:', error));
    }
    const handleSearch = (e) => {
        if (!searchTitle.trim()) {
            e.preventDefault();
            console.log("Please enter a title to search.")
        } else {
            navigate(`/search/${searchTitle.trim()}`);
        }
    };
    return (
        <div>
            <h1>Posts</h1>

            <div className="posts">
                <div className="post-menu">
                    <div className="add-post">
                        <button><Link to={`/new-post`}>New Post</Link></button>
                    </div>
                    <div className="limit">
                        <input type="number" onChange={(e)=>setLimitCount(e.target.value)} /> 
                        <button onClick={handleLimit}>Limit</button>
                    </div>
                    <div className="search-post">
                        <input type="text" onChange={(e)=>setSearchTitle(e.target.value)} /> 
                        <button onClick={handleSearch}>Search By Title</button>
                    </div>
                </div>

                {posts.map((post) => (
                    <div className="post" key={post._id}>
                        <div className="option">
                            <button><Link to={`/update/${post._id}`}>Update</Link></button>
                            <button onClick={() => handleDelete(post._id)}>Delete</button>
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