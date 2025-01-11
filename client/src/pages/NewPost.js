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
    <div>
        <h2>NewPost</h2>
        <table>
            <tr>
                <td>Add Title: </td>
                <td><input type="text" onChange={(e)=>setTitle(e.target.value)} /></td>
            </tr>
            <tr>
                <td>Add Content: </td>
                <td><textarea name=""  onChange={(e)=>setContent(e.target.value)} ></textarea></td>
            </tr>
            <tr>
                <td><button onClick={handleSave}>Save</button></td>
            </tr>
        </table>
    </div>
  )
}

export default NewPost