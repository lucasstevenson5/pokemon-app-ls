const Team = require("../models").Team;
const Player = require("../models").Player;

const index = (req, res) => {
    Team.findAll()
    .then(teamIndex => {
        res.render("team/index.ejs", {
            team: teamIndex
        });
    })
};

const show = (req,res) => {
    Team.findByPk(req.params.index, {
        include: [{
            model: Player,
            attributes: ['name']
        }]
    })
    .then(showTeam => {
        res.render("team/show.ejs", {
            team: showTeam
        })
    })
}

module.exports = {
    index,
    show
};