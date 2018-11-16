const loginBtn = document.querySelector('.login__btn');
const logoutBtn = document.querySelector('.logout__btn');
const registerBtn = document.querySelector('.register__btn');
const welcomeMsg = document.querySelector('.welcome__message');

// 페이지 로드시 실행되는 이벤트 함수
window.onload = function() {
    const isLogin = document.cookie.includes('user'); // TODO JWT 유효성 검사

    // 로그인 여부에 따른 헤더
    loginBtn.hidden = isLogin;
    registerBtn.hidden = isLogin;
    logoutBtn.hidden = !isLogin;

    if (isLogin) {
        const userCookie = JSON.parse(getCookie('user').slice(2));
        const accessTokenIncoded = userCookie.token;

        const userId = parseJwt(accessTokenIncoded).user_id;

        welcomeMsg.textContent = userId + '님 환영합니다.';
    }
};

function logout() {
    const request = new XMLHttpRequest();
    request.open('POST', '/api/auth/logout', true);
    request.send();

    request.onload = function() {
        window.location.href = '/';
    }
}

// 저장된 쿠키를 가져오는 함수
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// jwt 정보를 가져오는 함수
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}
