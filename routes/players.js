const express = require('express');
const router = express.Router(); 
const ctrl = require("../controllers");

router.get("/", ctrl.players.index);
router.get("/signup", ctrl.players.renderSignUp);
router.get("/login", ctrl.players.renderLogin);
router.get("/profile/:index", ctrl.players.renderProfile);
router.post("/signup", ctrl.players.signup);
router.post("/login", ctrl.players.login);
router.put("/profile/:index", ctrl.players.edit);
router.put("/profile/:index/release", ctrl.players.releasePokemon);
router.delete("/profile/:index", ctrl.players.deleteUser);

module.exports = router;