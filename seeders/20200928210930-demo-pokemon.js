'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Pokemons",
      [
        {
          name: "Bulbasaur",
          img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
          type: "Grass"
        },
        {
          name: "Ivysaur",
          img: "http://img.pokemondb.net/artwork/ivysaur.jpg",
          type: "Grass"
        },
        {
          name: "Venusaur",
          img: "http://img.pokemondb.net/artwork/venusaur.jpg",
          type: "Grass"
        },
        {
          name: "Charmander",
          img: "http://img.pokemondb.net/artwork/charmander.jpg",
          type: "Fire"
        },
        {
          name: "Charizard",
          img: "http://img.pokemondb.net/artwork/charizard.jpg",
          type: "Fire"
        },
        {
          name: "Squirtle",
          img: "http://img.pokemondb.net/artwork/squirtle.jpg",
          type: "Water"
        },
        {
          name: "Wartortle",
          img: "http://img.pokemondb.net/artwork/wartortle.jpg",
          type: "Water"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
