const sequelize = require('../services/mysql');
const Sequelize = require('sequelize');


const User = sequelize.define("User", {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        required: true
    },
    email: {
        type: Sequelize.STRING,
        required: true
    },
    usrPassword: {
        type: Sequelize.STRING,
        required: true
    }
});

module.exports = User;