const express = require("express");
const ctrl = require("../controllers/fortnite.ctrl");
const router = express.Router();

router.get("/player/:id", ctrl.getPlayerStats);

module.exports = router;
