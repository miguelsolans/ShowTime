const sequelize = require('../services/mysql');
const Sequelize = require('sequelize');
const Country   = require('./country');
const Genre = require('./genre');

const Band = sequelize.define('Band', {
    bandId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    bandName: {
        type: Sequelize.STRING,
        required: true
    },
    countryCode: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Country',
            key: "countryCode",
        },
        required: true
    },
    genreId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Genre',
            key: "genreId"
        }
    }
});

Band.belongsTo(Genre, {
    foreignKey: "genreId"
});
Band.belongsTo(Country, {
    foreignKey: "countryCode"
});


module.exports = Band;

