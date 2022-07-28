const btn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')
btn.addEventListener('click', function () {
    btn.classList.toggle("active")
    menu.classList.toggle("active")
})