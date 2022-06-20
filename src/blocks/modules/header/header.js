// Фон для Header
var header = document.querySelector('.header');
window.addEventListener('scroll', function () {
   if (window.scrollY > 40) {
        header.classList.add("header_scrolled");
    } else {
        header.classList.remove("header_scrolled");
    }
});

// Меню
var menu = document.querySelector(".menu");
var burgerMenu = document.querySelector(".header__burger-menu");
var menuClose = document.querySelector(".menu__close");

function showMenu(){
    menu.classList.add("menu_active");
}
function closeMenu(){
    menu.classList.remove("menu_active");
}

burgerMenu.addEventListener("click", showMenu);
menuClose.addEventListener("click", closeMenu);