// 공통으로 들어가는 내용을 성격별로 함수로 만들기
const subNavi = () => {};
const subVisual = () => {};

//header/footer 호출후 함수 실행
const subcomInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                get(tag).innerHTML = res;
                // 함수호출은여기에
                //구조가 생성된 후;
                //발생하는 함수들 작성();
                subNavi();
                subVisual();
            });
    };
    getPage('page/subvisual.html', '#subVisual');
    getPage('page/subcontent.html', '#subContent');
};

(() => {
    subcomInit();
})();
