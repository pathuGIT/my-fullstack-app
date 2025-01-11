import axios from "axios";

const api_base_url = 'http://localhost:8000/api/posts';

// Fetch all posts
//export const fetchPosts = () => axios.get(api_base_url);
export const fetchPosts = (params = {}) => axios.get(api_base_url, { params });

// Fetch a post
export const fetchPost = (id) => axios.get(`${api_base_url}/${id}`);

// Create new post
export const newPost = (data) => axios.post(api_base_url,data);

// Update post by id
export const updatePost = (id, data) => axios.put(`${api_base_url}/${id}`,data);

// Delete post by id
export const deletePost = (id) => axios.delete(`${api_base_url}/${id}`);