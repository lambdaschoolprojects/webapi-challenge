const express = require("express");
const actionDB = require("../data/helpers/actionModel");

const {
  validateActionId,
  validateAction
} = require("../middleware/actionMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await actionDB.get();

    if (!actions || Object.keys(actions).length < 1)
      return res.status(400).json({ message: "Error retrieving actions. " });

    res.json(actions);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", validateActionId, (req, res) => {
  res.json(req.action);
});

router.post("/", validateAction, async (req, res) => {
  try {
    const action = await actionDB.insert(req.action);

    if (!action || Object.keys(action).length < 1)
      return res.status(400).json({ message: "Unable to insert action." });

    res.status(200).json(action);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
