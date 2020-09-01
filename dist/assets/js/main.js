let articles = document.querySelectorAll("article");
let articleLength = document.querySelectorAll("article").length;

for (let i = 0; i < articleLength; i++)
{
    setTimeout(function ()
    {
        articles[i].classList.add("loaded");
    }, 500);
}