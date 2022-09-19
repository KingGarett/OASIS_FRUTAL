import { productos } from "../products.js"

const copiar = async (url) =>{
    const respuesta = await fetch(url)
    const texto = await respuesta.text()
    return texto
}   

const links = document.querySelectorAll('[data-spa]')
links.forEach(link =>{
    link.addEventListener('click',async (event)=>{
        event.preventDefault()
        const main = document.querySelector('main')
        main.innerHTML = await copiar(`./screens/${event.target.textContent}.html`)
        productos()
    })
})

const home = document.querySelector('[data-home]')
home.addEventListener('click',()=>{
    location.reload()
})