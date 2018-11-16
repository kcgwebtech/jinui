const Sequelize = require('sequelize');
const database = require('./database');

// boards 모델(테이블) 정의
const boards = database.define('boards', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: Sequelize.STRING(30),
        uniqueKey: true,
    },
    title: {
        type: Sequelize.STRING(255),
    },
    contents: {
        type: Sequelize.STRING,
    },
}, {
    tableName : 'boards',
    timestamps: false,
});


module.exports = boards;