const express = require('express');
const actionDB = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await actionDB.get();

        if(!actions || Object.keys(actions).length < 1) return res.status(400).json({ message: "Error retrieving actions. "});

        res.json(actions);
    } catch(err) {
        res.status(500).json(err);
    }
})


module.exports = router;