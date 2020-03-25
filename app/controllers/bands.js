const Band = require('../models/band');
const Genre = require('../models/genre');


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