const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav-item");
let showMenu = false;

let articles = document.querySelectorAll("article");

let i = 0;
let articleInterval = setInterval(function () {
    articles[i].classList.add("loaded");
    i++;
    if (i === articles.length) {
        clearInterval(articleInterval);
    }
}, 300);


menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        burger.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach(item => {
            item.classList.add("open");
        });
        showMenu = true;
    }
    else {
        burger.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach(item => {
            item.classList.remove("open");
        });
        showMenu = false;
    }
}