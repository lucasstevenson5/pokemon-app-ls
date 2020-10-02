const express = require('express');
const router = express.Router(); 
const ctrl = require("../controllers");

router.get("/", ctrl.team.index);
router.get("/:index", ctrl.team.show);

module.exports = router;