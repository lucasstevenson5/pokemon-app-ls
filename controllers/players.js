// const players = require("../players");

const Player = require("../models").Player;
const Team = require("../models").Team;
const Pokemon = require("../models").Pokemon;

const index = (req, res) => {
    res.render("players/index.ejs");
}

const renderSignUp = (req, res) => {
    res.render("players/signup.ejs");
}

const renderLogin = (req, res) => {
    res.render("players/login.ejs");
}

const renderProfile = (req, res) => {
    Player.findByPk(req.params.index, 
        {
            include: [
                {
                    model: Team
                },
                {
                    model: Pokemon
                }
            ],
        }
    )
    .then(showProfile => {
        // console.log(showProfile)
        // console.log("===================================")
        Team.findAll()
        .then(displayTeams => { 
            // console.log(displayTeams)
            // console.log("===================================")
            Pokemon.findAll({
                order: [
                    ['name', 'ASC']
                ]
            })
            .then(displayPokemon => {
                // console.log(displayPokemon)
                // console.log("===================================")
                res.render("players/profile.ejs", {
                    players: showProfile,
                    teams: displayTeams,
                    pokemon: displayPokemon
                    // index: req.params.index
            })
            
            });
        })
    }) 
};

const signup = (req, res) => {
    Player.create(req.body)
    .then(newPlayer => {
        // players.push(req.body);
        res.redirect(`profile/${newPlayer.id}`);
    })
    
}

const login = (req, res) => {
    Player.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(loginPlayer => {
        res.redirect(`profile/${loginPlayer.id}`)
    })
    // for(let i = 0; i < players.length; i++){
    //     if (players[i].username === req.body.username && players[i].password === req.body.password) {
    //         res.redirect(`profile/${i}`);
    //     } else if (players[i].username === req.body.username) {
    //         res.send("Incorrect Password");
    //     }
    // }
    // res.redirect('login');
}

const edit = (req, res) => {
    Player.update(req.body, {
        where: { id: req.params.index },
        returning: true,
    })
    .then(updatedPlayer => {
        Pokemon.findByPk(req.body.pokemonId)
        .then(foundPokemon => {
            Player.findByPk(req.params.index)
            .then(foundPlayer => {
                foundPokemon.addPlayer(foundPlayer);
                res.redirect(`/players/profile/${req.params.index}`);
            })
        })
    }) 
}

const releasePokemon = (req, res) => {
    console.log(req.body);
    console.log("==========================")
    Pokemon.findAll(req.body)
    .then(foundPokemon => {
        // console.log(foundPokemon);
        // console.log("==========================")
        Player.findByPk(req.params.index)
        .then(foundPlayer => {
            for(const property in req.body){
                for(let i=0; i < foundPokemon.length; i++) {
                    if(foundPokemon[i].name == property){
                        foundPokemon[i].removePlayer(foundPlayer);
                        console.log("we found a match")
                    }
                }
            }
            console.log(foundPlayer);
            console.log("==========================")
            
            res.redirect(`/players/profile/${req.params.index}`);
        })
    })
}

const deleteUser = (req, res) => {
    Player.destroy({
        where: { id: req.params.index }
    })
    .then(() => {
        // players.splice(req.params.index, 1);
        res.redirect("/players");
    })
}

module.exports = {
    index,
    renderSignUp,
    renderLogin,
    renderProfile,
    signup,
    login,
    edit,
    releasePokemon,
    deleteUser
}