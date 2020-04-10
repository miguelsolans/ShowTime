const Genre = require('../models/genre');

module.exports.findAll = () => {
    return Genre.findAll()
};
