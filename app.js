/* mostrar menu */
const btnMenu = document.querySelector(".menu-btn")
const menu  = document.querySelector(".menu")

btnMenu.addEventListener("click",(e)=>{
    btnMenu.firstElementChild.classList.toggle("none")
    btnMenu.lastElementChild.classList.toggle("none")
    menu.classList.toggle("is-active")

})

//esconder menu al escoger una opcion de este 
menu.addEventListener("click",(e)=>{
    if(e.target.matches(".menu a")) {
        btnMenu.firstElementChild.classList.remove("none")
        btnMenu.lastElementChild.classList.add("none")
        menu.classList.remove("is-active")
    }
    else {
        return false
    }

})