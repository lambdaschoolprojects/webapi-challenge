const express = require('express');
const projectDB = require('../data/helpers/projectModel')

const router = express.Router();

router.get('/', async (req, res) => {
    const projects = await projectDB.get();

    res.json(projects);
})


module.exports = router;