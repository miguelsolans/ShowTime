const sequelize = require('../services/mysql');
const Sequelize = require('sequelize');

const Country = sequelize.define('Country', {
    countryCode: {
        type: Sequelize.STRING,
        required: true,
        primaryKey: true
    },
    countryName: {
        type: Sequelize.STRING,
        required: true,
    }
});

module.exports = Country;