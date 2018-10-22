const Sequelize = require('sequelize');

const database = new Sequelize(
    'account',
    'root',
    'wlsdml1103',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = { Sequelize, database };