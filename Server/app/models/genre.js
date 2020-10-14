const sequelize = require('../services/mysql');
const Sequelize = require('sequelize');

const Genre = sequelize.define('Genre', {
    genreId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    genreName: {
        type: Sequelize.STRING,
        required: true
    }
});

module.exports = Genre;