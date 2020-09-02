let articles = document.querySelectorAll("article");

let i = 0;
let handler = setInterval(function () {
    articles[i].classList.add("loaded");
    i++;
    if (i === articles.length) {
        clearInterval(handler);
    }
}, 300);