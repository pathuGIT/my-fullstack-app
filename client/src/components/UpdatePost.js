import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchPost, updatePost } from '../api/ApiService';

function UpdatePost() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchPost(id)
            .then((response) => setPost(response.data))
            .catch((error) => console.error('Error fetching the post:', error));

    }, [id])

    const handleUpdate = () => {
        updatePost(id, {"title":title, "content":content})
            .then(() => navigate('/'))
            .catch((error) => console.error('Error updating item:', error));    
    }

    return (
        <div>
            <h2>Hello</h2>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder={post.title} />
            <textarea name="" onChange={(e)=>setContent(e.target.value)} placeholder={post.content}></textarea>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default UpdatePost