const sequelize = require('../services/mysql');
const Sequelize = require('sequelize');

const TypeOfVenue = require('./typeOfVenue');

const Place = sequelize.define('Place', {
    placeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    address: {
        type: Sequelize.STRING,
    },
    venue: {
        type: Sequelize.STRING,
        required: true
    },
    typeOfVenueId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'TypeOfVenue',
            key: "typeOfVenueId"
        }
    }
});

TypeOfVenue.belongsTo(Place, {
    foreignKey: "typeOfVenueId"
});

module.exports = Place;

