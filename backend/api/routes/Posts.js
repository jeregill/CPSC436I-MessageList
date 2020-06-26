const express = require('express');
const router = express.Router();
const Post = require("../models/post");

/* GET posts listing. */
router.get('/', async (req, res, next) => {
    const posts = await Post.find();
    res.setHeader('Content-type', 'application/json');
    res.send(posts);
});

router.get('/:postId', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.send(post);
    } catch {
        res.status(404);
        res.send({error: 'Post does not exist'});
    }
});

router.post('/', async (req, res, next) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.setHeader('Content-Type', 'application/json');
    res.send(newPost);
});

router.patch('/:postId', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId);
        post.content = req.body.content;
        post.date = req.body.date;
        await post.save();
        res.send(post);
    } catch {
        res.status(404);
        res.send({error: 'Post does not exist'});
    }
});

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
