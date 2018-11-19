const title = document.querySelector('.title');
const contents = document.querySelector('.contents');
const submitBtn = document.querySelector('.submitBtn');

submitBtn.onclick = function() {
    const titleValue = title.value;
    const contentsValue = contents.value;
    const blankMsg = checkBlank(titleValue, contentsValue);

    if (blankMsg) {
        alert(blankMsg);
        return;
    }

    console.log(titleValue, contentsValue);
};

function checkBlank(titleValue, contentsValue) {
    if (titleValue.length < 1) {
        return '제목을 작성해주세요';
    }

    if (contentsValue.length < 1) {
        return '내용을 작성해주세요';
    }

    return null;
}