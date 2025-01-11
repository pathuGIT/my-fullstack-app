import mongoose from 'mongoose';
import Post from "../models/post.model.js";

// @desc   Get all posts
// @route  GET /api/posts
export const getPosts = async (req, res, next) => {
    const limit = parseInt(req.query.limit);
    try {
        const posts = await Post.find({});
        if (!isNaN(limit) && limit > 0) {
            return res.status(200).json(posts.slice(0, limit));
        }
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

// @desc   Get post
// @route  GET /api/posts/:id
export const getPost = async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error(`Invalid post ID: ${id}`);
        error.status = 400;
        return next(error);
    }

    try {
        const post = await Post.findById(id);

        if (!post) {
            const error = new Error(`A post with id of ${id} not found.`);
            error.status = 404;
            return next(error);
        }

        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
};

// @desc   Create new post
// @route  POST /api/posts
export const createPost = async (req, res, next) => {
    const { title, content } = req.body;

    if (!title || !content) {
        const error = new Error(`Please include all required fields.`);
        error.status = 400;
        return next(error);
    }

    try {
        const newPost = await Post.create({ title, content });
        const posts = await Post.find({});
        res.status(201).json(posts);
    } catch (error) {
        next(error);
    }
};

// @desc   Update a post
// @route  PUT /api/posts/:id
export const updatePost = async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error(`Invalid post ID: ${id}`);
        error.status = 400;
        return next(error);
    }

    try {
        const post = await Post.findById(id);

        if (!post) {
            const error = new Error(`A post with id of ${id} not found.`);
            error.status = 404;
            return next(error);
        }

        post.title = title;
        post.content = content;
        await post.save();

        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

// @desc   Delete a post
// @route  DELETE /api/posts/:id
export const deletePost = async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error(`Invalid post ID: ${id}`);
        error.status = 400;
        return next(error);
    }

    try {
        const post = await Post.findByIdAndDelete(id);

        if (!post) {
            const error = new Error(`A post with id of ${id} not found.`);
            error.status = 404;
            return next(error);
        }

        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};