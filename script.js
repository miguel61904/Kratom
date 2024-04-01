let icon = document.querySelector(".toggle");
let icon2 = document.querySelector(".toggle2");
let barra = document.querySelector(".barNav");
let body = document.querySelector("body")



function alternar(){
    body.style.overflow = 'hidden'
    barra.style.display = 'flex'
    icon.style.display = 'none'
    icon2.style.display = 'flex'
}

function cerrar(){
    body.style.overflow = 'Visible'
    barra.style.display = 'none'
    icon2.style.display = 'none'
    icon.style.display = 'flex'
}