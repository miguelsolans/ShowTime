const Concert = require('../models/concert');
const Band = require('../models/band');
const Place = require('../models/place');
const Genre = require('../models/genre');
const sequelize = require('../services/mysql');

module.exports.list = ( projection ) => {
    return Concert.findAll({ attributes: projection, include: [Band], order: [[ 'concertDate', 'DESC' ]] })
};

module.exports.countByGenre = () => {

    return sequelize.query("SELECT count(*) as \"y\", Genre.genreName AS \"name\", Genre.genreName AS \"drilldown\" FROM Concert INNER JOIN Band on Concert.bandId = Band.bandId INNER JOIN Genre on Band.genreId = Genre.genreId GROUP BY Genre.genreName;");
};


// exports.getItemSaleCount = () => SaleItem.findAll({
//     attributes: ['itemId', [sequelize.fn('count', sequelize.col('itemId')), 'count']],
//     group : ['SaleItem.itemId'],
//     raw: true,
//     order: sequelize.literal('count DESC')
// });