const sequelize = require('../services/mysql');
const Sequelize = require('sequelize');

const TypeOfVenue = sequelize.define('TypeOfVenue', {
    typeOfVenueId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    venueDescription: {
        type: Sequelize.STRING,
        required: true
    }
});


module.exports = TypeOfVenue;

