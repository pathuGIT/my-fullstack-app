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
            .then((response) => {
                setPost(response.data)
                setTitle(response.data.title)
                setContent(response.data.content)
            })
            .catch((error) => console.error('Error fetching the post:', error));

    }, [id])

    const handleUpdate = () => {
        const updtTitle = title.trim() ? title : post.title;
        const updtContent = content.trim() ? content : post.concat;

        updatePost(id, {"title":updtTitle, "content":updtContent})
            .then(() => navigate('/'))
            .catch((error) => console.error('Error updating item:', error));    
    }

    return (
        <div className= ' container mx-auto p-4 border'>
            <h2 className=' text-2xl mb-16'>Update The Post</h2>
            <input type="text" className=' border block mb-2 w-2/5' onChange={(e)=>setTitle(e.target.value)} placeholder={post.title} />
            <textarea name="" className=' border block mb-4 w-2/5' onChange={(e)=>setContent(e.target.value)} placeholder={post.content}></textarea>
            <button  className='block border px-4 py-2 bg-sky-500 rounded' onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default UpdatePost