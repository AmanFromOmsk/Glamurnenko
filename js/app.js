//nav icon
const goTopBtn = document.querySelector('.go-top')
const navBtn = document.querySelector('.nav__toggle')
const nav = document.querySelector('.header__top')
const menuIcon = document.querySelector('.menu-icon')

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
}

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll(){
 const offset = window.pageYOffset;
 const coords = document.documentElement.clientHeight*6.7;
 if( offset > coords){
    goTopBtn.classList.add('go-top__show');
 } else{
    goTopBtn.classList.remove('go-top__show');
 }
}

function goTop(){
    if(window.pageYOffset > 0){
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}