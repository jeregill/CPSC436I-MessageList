const express = require('express');
const router = express.Router();
const User = require("../models/user");

/* GET users listing. */
router.get('/', async (req, res, next) => {
    const users = await User.find();
    res.setHeader('Content-type', 'application/json');
    res.send(users);
});

router.get('/:userId', async (req, res, next) => {
    try {
        const post = await User.findById(req.params.userId);
        res.send(post);
    } catch {
        res.status(404);
        res.send({error: 'User does not exist'});
    }
});

router.post('/', async (req, res, next) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.setHeader('Content-Type', 'application/json');
    res.send(newUser);
});

module.exports = router;
