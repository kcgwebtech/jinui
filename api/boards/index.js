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

router.get('/:id', (req, res) => {
    const id = req.params.id;

    boards.findOne({
        where: {
            id: id
        }
    }).then((board) => {
       res.json({
           data: board,
       });
    }).catch((err) => {
        res.json({
            error: err
        });
    });
});

module.exports = router;