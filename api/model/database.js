const Sequelize = require('sequelize');
const dbConfig = require('../config/db');

const name = dbConfig.name;
const id = dbConfig.id;
const password = dbConfig.password;
const host = dbConfig.host;
const dbms = dbConfig.dbms;

const database = new Sequelize(
    name,
    id,
    password,
    {
        host: host,
        dialect: dbms,
    }
);

module.exports = database;