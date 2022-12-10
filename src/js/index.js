const switchToggle = document.getElementById('switch')
const heading = document.querySelectorAll('.heading')
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const article = document.querySelectorAll('article')
const spanToggle = document.getElementById('span-toggle')
const span = document.querySelectorAll('.span')

switchToggle.addEventListener('click', function (){
    
    for (let i = 0; i < heading.length; i++) {
    if (switchToggle.checked) { 
       heading[i].classList.remove('dark-mode')
       heading[i].classList.add('light-mode')
       header.classList.remove('bg-header-dark-theme')
       header.classList.add('bg-header-light-theme')
       main.classList.remove('bg-main-dark-theme')
       main.classList.add('bg-main-light-theme')
       spanToggle.classList.remove('dark-mode')
       spanToggle.classList.add('light-mode')
    } else {
        heading[i].classList.add('dark-mode')
       heading[i].classList.remove('light-mode')
       header.classList.add('bg-header-dark-theme')
       header.classList.remove('bg-header-light-theme')
       main.classList.add('bg-main-dark-theme')
       main.classList.remove('bg-main-light-theme')
       spanToggle.classList.add('dark-mode')
       spanToggle.classList.remove('light-mode')
    }
} })

switchToggle.addEventListener('click', function () {
    for (let i = 0; i < article.length; i++) {
        if (switchToggle.checked) {
            article[i].classList.remove('article-bg-dark')
            article[i].classList.add('article-bg-light')
            span[i].classList.remove('dark-span')
            span[i].classList.add('light-span')
        } else {
            article[i].classList.add('article-bg-dark')
            article[i].classList.remove('article-bg-light')
            span[i].classList.add('dark-span')
            span[i].classList.remove('light-span')
        }
    }
})
