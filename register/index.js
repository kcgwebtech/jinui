function register() {
    const id = document.getElementsByClassName('id');
    const pw = document.getElementsByClassName('pw');

    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', '/api/auth/register');
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
        const message = result.data.message;
        alert(message);
        location.href = '/';
    }
}