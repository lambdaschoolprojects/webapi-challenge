const actionDB = require('../data/helpers/actionModel');

const validateActionId = async (req, res, next) => {
    const { id } = req.params;
    try {
        const action = actionDB.get(id);
        if(!action || Object.keys(action).length < 1) return res.status(400).json({ message: "Could not find that action."});

        req.action = action;
    } catch(err) {
        res.status(500).json(err);
    }

    next();
};

module.exports = {
    validateActionId
}