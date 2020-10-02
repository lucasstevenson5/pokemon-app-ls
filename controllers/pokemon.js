// const pokemon = require("../pokemon");

const Pokemon = require("../models").Pokemon;
const Player = require("../models").Player;

const index = (req, res) => {
    Pokemon.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
    .then(pokemonIndex => {
        res.render("index.ejs", {
            pokemon: pokemonIndex
        });
    })
};

const newPokemon = (req, res) => {
    res.render("edit.ejs");
};

const show = (req, res) => {
    Pokemon.findByPk(req.params.index, {
        include: [
            {
                model: Player,
                attributes: ['name']
            }
        ]
    })
    .then(showPokemon => {
        res.render("show.ejs", {
            pokemon: showPokemon
            // index: req.params.index
        });
    })
    
};

const edit = (req, res) => {
    Pokemon.findByPk(req.params.index)
    .then(changePokemon => {
        res.render("edit.ejs", {
            pokemon: changePokemon,
            // index: req.params.index
        });
    })
};

const postPokemon = (req, res) => {
    // pokemon.push(req.body);
    Pokemon.create(req.body)
    .then(newPokemon => {
        res.redirect("/pokemon");
    })
}

const changePokemon = (req, res) => {
    Pokemon.update(req.body, {
        where: { id: req.params.index },
        returning: true,
    })
    .then(updatedPokemon => {
        // pokemon[req.params.index] = req.body;
        res.redirect(`/pokemon/${req.params.index}`);
    })
    
}

const deletePokemon = (req, res) => {
    Pokemon.destroy({ 
        where: { id: req.params.index }
    })
    .then(() => {
        // pokemon.splice(req.params.index, 1);
    res.redirect("/pokemon");
    })
}

module.exports = {
    index,
    newPokemon,
    show,
    edit,
    postPokemon,
    changePokemon,
    deletePokemon
};
