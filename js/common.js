const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
};

const navi = () => {
    const $gnbli = getAll('#header .nav .gnb li');
};
const familySite = () => {};

const comInit = () => {};

(() => {
    preventDefaultAnchor();
    comInit();
})();
