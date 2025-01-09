import express from 'express';
import logger from '../middleware/logger.js';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController.js';
const router = express.Router();


//get all posts
router.get('/', getPosts)

//get single post
router.get('/:id',getPost)

// Create new post
router.post('/',createPost)

// Update a post
router.put('/:id', updatePost)

// Delete a post
router.delete('/:id', deletePost)
export default router;