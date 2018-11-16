const express = require('express');
const router = express.Router();
const boards = require('../model/boards');

router.get('/', (req, res) => {
    boards.findAll({
        order: [
            ['id', 'DESC'],
        ]
    }).then((results) => {
        res.json({
            data: results,
        });
    })
    .catch((err) => {
        res.json({
            error: err,
        })
    });
});

module.exports = router;