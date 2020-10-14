const sequelize = require('../services/mysql');
const Sequelize = require('sequelize');

const Band = require('./band');
const Country = require('./country');
const Place = require('./place');


const Concert = sequelize.define('Concert', {
    concertId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    bandId: {
        type: Sequelize.INTEGER,
        required: true,
        references: {
            model: 'Band',
            key: 'bandId'
        }
    },
    placeId: {
        type: Sequelize.INTEGER,
        required: true,
        references: {
            model: 'Place',
            key: 'placeId'
        }
    },
    concertDate: {
        type: Sequelize.DATE,
        required: true
    }
});

Concert.belongsTo(Band, {
    foreignKey: 'bandId'
});


Concert.belongsTo(Place, {
    foreignKey: 'placeId'
});

module.exports = Concert;