const navHTML = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
    navHTML.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
    navHTML.classList.remove('navbar-scrolled');
    }
});