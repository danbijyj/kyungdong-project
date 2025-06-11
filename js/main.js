//비주얼배너
const mainBanner = () => {};
//이벤트배너
const eventBanner = () => {};

//합치기
const mainInit = () => {
    mainBanner();
    eventBanner();
};

(() => {
    mainInit();
})();
