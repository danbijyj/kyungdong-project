const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => {
        link.addEventListener('click', (e) => e.preventDefault());
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

const navi = () => {
    const $gnbli = getAll('#header .nav .gnb > li');
    const $nav = get('#header .nav');
    const $navBar = get('#header .nav-bg');
    $gnbli.forEach((itemLi) => {
        itemLi.addEventListener('mouseenter', (e) => {
            $nav.classList.add('on');
            $navBar.classList.add('on');
        });
    });
    $nav.addEventListener('mouseleave', (e) => {
        $nav.classList.remove('on');
        $navBar.classList.remove('on');
    });
};
const familySite = () => {};

const siteMap = () => {
    const $siteMap = get('.sitemap');
    const $bg = get('.bg');
    const $allMenu = get('#header .util .all-menu');
    const $close = get('.sitemap .close');
    $allMenu.addEventListener('click', (e) => {
        $siteMap.classList.add('on');
        $bg.classList.add('on');
    });
    $close.addEventListener('click', (e) => {
        $siteMap.classList.remove('on');
        $bg.classList.remove('on');
    });
};

const topBar = () => {
    const $top = get('.top');
    const $header = get('#header');
    const $con0 = get('#mainVisual');
    let ty = 0;
    $top.addEventListener('click', (e) => {
        ty = $con0.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    window.addEventListener('scroll', (e) => {
        //window.scrollY , window.pageYOffset 둘중에 하나 쓰기
        // console.log(window.screenY);
        ty = window.scrollY;
        if (ty > 300) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }
        if (ty > 100) {
            $header.classList.add('on');
        } else {
            $header.classList.remove('on');
        }
    });
};

const comInit = () => {
    navi();
    topBar();
    siteMap();
};

(() => {
    preventDefaultAnchor();
    comInit();
})();
