const express = require('express');
const projectDB = require('../data/helpers/projectModel')

//middleware
const { validateProjectId } = require('../middleware/projectMiddleware');

const router = express.Router();

router.get('/', async (req, res) => {
    const projects = await projectDB.get();

    res.json(projects);
})

router.get('/:id', validateProjectId, (req, res) => {
    res.json(req.project);
})


module.exports = router;