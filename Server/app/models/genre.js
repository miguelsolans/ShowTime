const sequelize = require('../services/mysql');
const Sequelize = require('sequelize');

const Genre = sequelize.define('Genre', {
    genreId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    genreName: {
        type: Sequelize.STRING,
        required: true
    }
});

module.exports = Genre;

// // force: true will drop the table if it already exists
// User.sync({force: false}).then(() => {
//     // Table created
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });