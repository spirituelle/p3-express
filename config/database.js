const Sequelize = require('sequelize');

const connection = new Sequelize('p3-express', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port:3308
});

module.exports = connection;