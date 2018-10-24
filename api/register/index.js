const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const users = require('../model/users');

router.post('/', (req, res) => {
    const user_id = req.body.user_id;
    const user_pw = req.body.user_pw;

    console.log(req.body);

    if (!(user_pw && user_pw)) {
        res.json({
            error: {
                message: '올바른 ID 또는 PW가 아닙니다.',
            }
        });

        return;
    }

    createUser(user_id, user_pw, (err, result) => {
        if (err) {
            res.json({
                error: {
                    message: result,
                }
            });

            return;
        }

        res.status(201).json({
            data: {
                message: '회원가입이 완료되었습니다! 로그인해주세요!',
                success: true,
            }
        });
    });
});


const createUser = (user_id, user_pw, callback) => {
    const hashPassword = crypto.createHash('md5').update(user_pw).digest('hex');

    users.create({
        user_id: user_id,
        user_pw: hashPassword,
    }).then((user) => {
        callback(false, user);
    }).catch((err) => {
        if (err.name === 'SequelizeUniqueConstraintError') {
            callback(true, '이미 존재하는 계정입니다.');
        } else {
            console.log(err);
            callback(true, err);
        }
    });
};

module.exports = router;