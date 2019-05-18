const express = require('express');
const projectDB = require('../data/helpers/projectModel')

//middleware
const { validateProjectId, validateProjectBody } = require('../middleware/projectMiddleware');

const router = express.Router();

router.get('/', async (req, res) => {
    const projects = await projectDB.get();

    res.json(projects);
});

router.get('/:id', validateProjectId, (req, res) => {
    res.json(req.project);
});

router.post('/', validateProjectBody, async (req, res) => {
    try {
        const project = await projectDB.insert(req.project);

        res.status(200).json(project)
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;