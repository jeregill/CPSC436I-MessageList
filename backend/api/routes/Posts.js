const express = require('express');
const router = express.Router();
const Post = require("../models/post");

// get all posts
router.get('/', async (req, res, next) => {
    const posts = await Post.find();
    res.setHeader('Content-type', 'application/json');
    res.send(posts);
});

// get posts by id
router.get('/:postId', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.send(post);
    } catch {
        res.status(404);
        res.send({error: 'Post does not exist'});
    }
});

// post a new post
router.post('/', async (req, res, next) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.setHeader('Content-Type', 'application/json');
    res.send(newPost);
});

// edit content of a post
router.patch('/edit/:postId', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId);
        post.content = req.body.editedContent;
        post.date = req.body.date;
        await post.save();
        res.send(post);
    } catch {
        res.status(404);
        res.send({error: 'Post does not exist'});
    }
});

// add comment to a post
router.patch('/comment/:postId', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId);
        post.comments.push(req.body.comment);
        await post.save();
        res.send(post);
    } catch {
        res.status(404);
        res.send({error: 'Post does not exist'});
    }
});

// like a post
router.patch('/like/:postId', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId);
        post.likes = post.likes + 1;
        await post.save();
        res.send(post);
    } catch {
        res.status(404);
        res.send({error: 'Post does not exist'});
    }
});

// dislike a post
router.patch('/dislike/:postId', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId);
        post.dislikes = post.dislikes + 1;
        await post.save();
        res.send(post);
    } catch {
        res.status(404);
        res.send({error: 'Post does not exist'});
    }
});

// put request to replace an entire post
router.put('/:postId', async (req, res, next) => {
    try {
        let post = await Post.findById(req.params.postId);
        post = new Post(req.body);
        await post.save();
        res.send(post);
    } catch {
        res.status(404);
        res.send({error: 'Post does not exist'});
    }
});

// delete a post
router.delete('/:postId', async (req, res, next) => {
    try {
        const post = await Post.deleteOne({_id: req.params.postId});
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({error: 'Post does not exist'});
    }
});

module.exports = router;
