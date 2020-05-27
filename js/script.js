const $menu = document.querySelector('.menu')
const $btnMenu =  document.querySelector('.btnMenu_open')
const $btnMenuClose=  document.querySelector('.btnMenu_close')

$btnMenu.addEventListener('click', function() {
    $menu.classList.add('menu_open')
})

$btnMenuClose.addEventListener('click', function() {
    $menu.classList.remove('menu_open')
})