const express = require('express');
const router = express.Router(); 
const ctrl = require("../controllers");

router.get("/", ctrl.pokemon.index);
router.get("/new", ctrl.pokemon.newPokemon);
router.get("/:index", ctrl.pokemon.show);
router.get("/:index/edit", ctrl.pokemon.edit);
router.post("/", ctrl.pokemon.postPokemon);
router.put("/:index", ctrl.pokemon.changePokemon);
router.delete("/:index", ctrl.pokemon.deletePokemon);

module.exports = router;