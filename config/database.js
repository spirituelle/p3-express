const Sequelize = require('sequelize');

const connection = new Sequelize('p3-express', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = connection;