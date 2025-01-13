// filepath: /c:/Users/Acer/Downloads/my-fullstack-app/client/src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../api/ApiService.js';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);
    const [limitCont, setLimitCount] = useState(0);
    const [searchTitle, setSearchTitle] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts({ limit: 0 })
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    const handleDelete = (id) => {
        deletePost(id)
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error deleting item:', error));
        console.log(id);
    };

    const handleLimit = () => {
        fetchPosts({ limit: limitCont })
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error limit posts:', error));
    };

    const handleSearch = (e) => {
        if (!searchTitle.trim()) {
            e.preventDefault();
            alert('Please enter a title to search.');
        } else {
            navigate(`/search/${searchTitle.trim()}`);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <p><Link to={`/tailwind`}  className=' border-b-2 hover:bg-sky-100'>move to tailwind</Link></p>

            <div className=" mt-10">
                <div className="post-menu flex space-x-4 mb-4">
                    <div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            <Link to={`/new-post`}>New Post</Link>
                        </button>
                    </div>
                    <div className="limit">
                        <input
                            type="number"
                            className="border px-2 py-1"
                            onChange={(e) => setLimitCount(e.target.value)}
                        />
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded ml-2"
                            onClick={handleLimit}
                        >
                            Limit
                        </button>
                    </div>
                    <div className="search-post">
                        <input
                            type="text"
                            className="border px-2 py-1"
                            onChange={(e) => setSearchTitle(e.target.value)}
                        />
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded ml-2"
                            onClick={handleSearch}
                        >
                            Search By Title
                        </button>
                    </div>
                </div>

                {posts.map((post) => (
                    <div className="post border p-4 mb-4 rounded" key={post._id}>
                        <div className="option flex space-x-4 mb-2">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                <Link to={`/update/${post._id}`}>Update</Link>
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded"
                                onClick={() => handleDelete(post._id)}
                            >
                                Delete
                            </button>
                        </div>
                        <h3 className="text-xl font-bold">{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;