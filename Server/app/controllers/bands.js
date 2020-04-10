const Band = require('../models/band');
const Genre = require('../models/genre');
const sequelize = require('../services/mysql');

module.exports.list = () => {

    return Band.findAll({
        include: [{
            model: Genre,
            required: true
        }]
    });
};

module.exports.add = ({ bandName, countryCode, genreId }) => {
    const newBand = {
        bandName: bandName,
        countryCode: countryCode,
        genreId: genreId
    };


    return Band.create(newBand)
};

module.exports.withoutSpotify = (limit) => {
    return sequelize.query(`SELECT * FROM Band WHERE spotifyId IS NULL LIMIT ${limit};`)
};