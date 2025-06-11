import data from './data.js';

//서브페이지의 공통부분
const subVisual = () => {};

// 페이지별 함수
const subTab = () => {};

//  sub1 page
const sub1 = () => {};

//
const subInit = () => {
    subVisual();

    //페이지별 sub 함수호출
    if (location.pathname.split('/').pop() === 'sub1.html') {
        sub1();
    }
};

(() => {
    subInit();
})();
