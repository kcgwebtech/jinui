function login() {
    const id = document.querySelector('.id').textContent;
    const pw = document.querySelector('.pw').textContent;

    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', '/api/auth/login');
    xmlHttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xmlHttp.send(JSON.stringify({
        user_id: id,
        user_pw: pw,
    }));

    const result = xmlHttp.response;
    console.log(result);

    if (result.hasOwnProperty('error')) {
        const message = result.error.message;
        alert(message);
    } else {
        alert('로그인에 성공했습니다!');
        location.href = '/';
    }
}