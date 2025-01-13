import React, { useState } from 'react'
import { newPost } from '../api/ApiService';
import { useNavigate } from 'react-router-dom'

function NewPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSave = () => {
        newPost({'title':title,'content':content})
        .then((response) => navigate('/'))
        .catch((error) => console.error('Error adding new post:', error));    
    }

  return (
    <div className=' container mx-auto p-4 border'>
        <h2 className=' text-2xl mb-8'>NewPost</h2>
        <table className=' text-base'>
            <tbody>
                <tr>
                    <td>Add Title: </td>
                    <td><input type="text" className='border' onChange={(e) => setTitle(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Add Content: </td>
                    <td><textarea className='border' onChange={(e) => setContent(e.target.value)}></textarea></td>
                </tr>
                <tr>
                    <td colSpan="2"><button className=' border px-4 py-2 bg-sky-500 rounded' onClick={handleSave}>Save</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default NewPost