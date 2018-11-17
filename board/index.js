const title = document.querySelector('.title');
const contents = document.querySelector('.contents');
const backBtn = document.querySelector('.backBtn');

window.onload = function() {
    const boardId = getQueryString('id');

    const request = new XMLHttpRequest();
    request.open('GET', '/api/boards/' + boardId, true);
    request.send();

    request.onload = function() {
        const boards = JSON.parse(request.response).data;

        title.textContent = boards.title;
        contents.textContent = boards.contents;
    };
};

backBtn.onclick = function() {
    window.history.back();
};

// 쿼리스트링 파싱 함수
function getQueryString(param) {
    const address = window.location.href;
    const queryString = address.split('?')[1];

    const queryStringArray = queryString.split('&');
    const queryStringObj = {};

    for (let i = 0, len = queryStringArray.length; i < len; i +=1) {
        const tmp = queryStringArray[i].split('=');
        const key = tmp[0];
        const value = tmp[1];

        queryStringObj[key] = value;
    }

    return queryStringObj[param];
}