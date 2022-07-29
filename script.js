const btn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')
btn.addEventListener('click', function () {
    btn.classList.toggle("active")
    menu.classList.toggle("active")
})

const menuLink = document.querySelectorAll(".menu__link")
for (let i = 0; i < menuLink.length; i++) {
    const el = menuLink[i];
    el.addEventListener('click', function () {
        for (let i = 0; i < menuLink.length; i++) {
            menuLink[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}