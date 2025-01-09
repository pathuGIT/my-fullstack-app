let posts = [
    {
        id: 1,
        title: 'First Post',
        content: 'This is the content of the first post'
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'This is the content of the second post'
    }
];

// @desc   Get all posts
// @route  GET /api/posts
export const getPosts = (req,res,next) => {
    const limit = parseInt(req.query.limit);
    
    if(!isNaN(limit) && limit>0){
        return res.status(200).json(posts.slice(0,limit));
    }
    
    res.status(200).json(posts)
}

// @desc   Get post
// @route  GET /api/posts/:id
export const getPost = (req,res,next) => {
    const id = parseInt(req.params.id);
    //res.send(posts.filter((e) => e.id === id)); //use filter method to get data
    const post = posts.find((e) => e.id === id); //use find method to get data
    
    if(!post){
        //return res.status(404).json({msg:`A post with id of ${id} not found.`});
        
        const error = new Error(`A post with id of ${id} not found.`);
        error.status = 404;
        return next(error);
    }

    res.status(200).json(post);
    
}

// @desc   Create new post
// @route  POST /api/posts
export const createPost = (req,res,next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    }

    if(!newPost.title || !newPost.content){
        //res.status(400).json({msg:`Please include all things.`})
        
        const error = new Error(`Please include all things.`);
        error.status = 400;
        return next(error);
    }
    posts.push(newPost); //add new object to array
    res.status(201).json(posts); //send back it
}

// @desc   Update a post
// @route  PUT /api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((e) => e.id === id);

    if(!post){
        //return res.status(404).json({msg:`A post with id of ${id} not found.`});

        const error = new Error(`A post with id of ${id} not found.`);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    post.content = req.body.content;
    res.status(200).json(posts);
}

// @desc   Delete a post
// @route  DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((e) => e.id === id);

    if(!post){
        //return res.status(404).json({msg:`A post with id of ${id} not found.`});

        const error = new Error(`A post with id of ${id} not found.`);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter((e) => e.id !== id);
    res.status(200).json(posts);
}