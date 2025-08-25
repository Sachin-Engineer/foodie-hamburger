const hamburgerIcon = document.querySelector('.mobile-navbar i')
const desktopNavbar = document.querySelector('.desktop-navbar')
const mobileNavbar = document.querySelector('.mobile-navbar')
const crossIcon = document.querySelector('.desktop-navbar span')

hamburgerIcon.addEventListener('click', () => {
    desktopNavbar.classList.add('open-menu')
    mobileNavbar.classList.add('open-menu')
})

crossIcon.addEventListener('click', () => {
    desktopNavbar.classList.remove('open-menu')
    mobileNavbar.classList.remove('open-menu')
})