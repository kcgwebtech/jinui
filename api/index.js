const express = require('express'); // 모듈을 불러오는 구문
const users = require('./model/users'); // users 테이블 모델
const app = express(); // express 생성
const port = 8888; // 서버를 열 때 사용되는 포트 정보

app.use(express.json());

/**
 * hi 라우터
 */
app.get('/hi', (req, res) => {
    res.send('hi~');
});


/**
 * create 라우터 (데이터 생성)
 */
app.post('/create', (req, res) => {
    const user_id = req.body.user_id;
    const user_pw = req.body.user_pw;

    users.create({
        user_id: user_id,
        user_pw: user_pw,
    }).then((user) => { // 콜백함수
        res.json({
            status: true,
            resData: user,
        });
    }).catch((err) => { // 에러 핸들링 함수
        res.json({
            status: false,
            resData: err,
        });
    });
});


/**
 * read 라우터 (데이터 조회)
 */
app.get('/read/:user_id', (req, res) => {
    const user_id = req.param('user_id');

    users.findOne({
        where: {
            user_id
        }
    }).then((user) => {
        res.json({
            status: true,
            resData: user.dataValues,
        })
    }).catch((err) => {
        res.json({
            status: false,
            resData: err,
        })
    });
});


app.listen(port); // port로 서버 열기
console.log('start server with 8888!');

