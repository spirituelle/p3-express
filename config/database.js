
const config = require('./../config.json');
const mysql = require('mysql2/promise');
const Sequelize  = require('sequelize');

const { user, password, database } = config.database;

// module.exports = db = {};

const connexion = new Sequelize(database, user, password, { dialect: 'mysql' });


module.exports = connexion;