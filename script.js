const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu-mobile');
const bodyBg = document.querySelector('body');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
    bodyBg.classList.toggle('is-active')
})

