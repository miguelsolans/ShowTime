const TypeOfVenue = require('../models/typeOfVenue');
const Place = require('../models/place');


module.exports.getPlaceById = (id) => {
    return Place.findByPk(id);
}