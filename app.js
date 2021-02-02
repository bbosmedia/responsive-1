
/* === Menu Show === */
const showMenu = (toggleId, menuId) =>{
    const toggle = document.getElementById(toggleId)
    const menu = document.getElementById(menuId)

    if(toggle && menu){
        toggle.addEventListener('click', () => {
            menu.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')



/* === Remove Menu === */
const links = document.querySelectorAll('.nav__link')

links.forEach(link => {

    
    link.addEventListener('click', () =>{
        const menu = document.getElementById('nav-menu')
        menu.classList.remove('show')
    })
})



/* === Scroll Sections Active Links ===*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeigh = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        if(scrollY > sectionHeigh && scrollY <= sectionTop + sectionHeigh){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/* === Change Color of Header === */

window.scroll = () => {
    const nav = document.getElementById('header')
    if(this.scrollY >= 200){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}