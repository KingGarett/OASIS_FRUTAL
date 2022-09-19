export function productos(){
async function extraerDatos(url){
    try{
        const productos = await fetch(url)
        const vegetales = await productos.json()
        return vegetales.productos
    } catch { error => console.log(error)}
}

const clearContainer = (parent) =>{
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

async function pintarProductos(url,dataset){
    const objects = await extraerDatos(url)
    let productos = []

    for (let {imagen,nombre,precio_monto,precio_tipo,oferta_cantidad,oferta_tipo,oferta_precio} of objects){
        const product = document.createElement('div')
        product.classList.add('categority__products')
        product.innerHTML = `
            <img class="categority__products__img" src="./assets/img/${imagen}.png" alt="${imagen}">
            <div class="categority__products__box" >
                <h5 class="products__box__name">${nombre}</h5>
                <h5 class="products__box__price">$${precio_monto}x${precio_tipo}</h5>
                <h5 class="products__box__offer">${oferta_cantidad}${oferta_tipo} x $${oferta_precio}</h5>
                <div class="products__box__container-btn">
                    <button class="products__box__btn">agregar</button>
                </div>
            </div>
        `
        productos.push(product)
    }
    return productos
}

async function pintarOfertas(url){
    const offerContainer = document.querySelector('[data-ofertas]')
    const offers = await extraerDatos(url)
    let products = []

    for (let {imagen,nombre,precio_monto,precio_tipo,oferta_cantidad,oferta_tipo,oferta_precio} of offers){
        if (oferta_cantidad>0){
            const product = document.createElement('div')
            product.classList.add("categorityOffer__products")
            product.innerHTML = `
                <img class="categority__products__img" src="./assets/img/${imagen}.png" alt="${imagen}">
                <div class="categority__products__box" >
                    <h5 class="products__box__name">${nombre}</h5>
                    <h5 class="products__box__price">$${precio_monto}x${precio_tipo}</h5>
                    <h5 class="products__box__offer">${oferta_cantidad}${oferta_tipo} x $${oferta_precio}</h5>
                    <div class="products__box__container-btn">
                        <button class="products__box__btn">agregar</button>
                    </div>
                </div>
            `
            products.push(product)
        }
    }

    products.forEach(product =>{
        offerContainer.appendChild(product)
    })

}
// Definiendo MOSTRAR OCULTAR
let view = 0

async function Mostrar(url,dataset){
    const objects = await pintarProductos(url,dataset)
    const productsContainer = document.querySelector(dataset)
    
    objects.forEach(producto =>{
        productsContainer.appendChild(producto)
    })
    view = 0    
}

async function Ocultar(url,dataset){
    const objects = await pintarProductos(url,dataset)
    const productsContainer = document.querySelector(dataset)
    
        if (objects.length>8){
        const muestra = objects.slice(0,8)
        muestra.forEach(producto =>{
            productsContainer.appendChild(producto)
        })
    } else {
        objects.forEach(producto =>{
            productsContainer.appendChild(producto)
        })
    }
    view = 1
}

//OCULTAR MOSTRAR los Productos

const show = document.querySelectorAll('.header__products__link')
show.forEach(link =>{
    link.addEventListener('click', (event) =>{
        event.preventDefault()
        if (event.target.id == 1 && view ==1){
            clearContainer(event.target.parentNode.nextElementSibling)
            Mostrar('./database/productos/vegetales.json','[data-vegetales]').then()
        }
        if (event.target.id == 1 && view ==0){
            clearContainer(event.target.parentNode.nextElementSibling)
            Ocultar('./database/productos/vegetales.json','[data-vegetales]').then()
        }
        if (event.target.id == 2 && view ==1){
            clearContainer(event.target.parentNode.nextElementSibling)
            Mostrar('./database/productos/frutas.json','[data-frutas]').then()
        }
        if (event.target.id == 2 && view ==0){
            clearContainer(event.target.parentNode.nextElementSibling)
            Ocultar('./database/productos/frutas.json','[data-frutas]').then()
        }
        if (event.target.id == 3 && view ==1){
            clearContainer(event.target.parentNode.nextElementSibling)
            Mostrar('./database/productos/bandejas.json','[data-bandejas]').then()
        }
        if (event.target.id == 3 && view ==0){
            clearContainer(event.target.parentNode.nextElementSibling)
            Ocultar('./database/productos/bandejas.json','[data-bandejas]').then()
        }
        if (event.target.id == 4 && view ==1){
            clearContainer(event.target.parentNode.nextElementSibling)
            Mostrar('./database/productos/huevos.json','[data-huevos]').then()
        }
        if (event.target.id == 4 && view ==0){
            clearContainer(event.target.parentNode.nextElementSibling)
            Ocultar('./database/productos/huevos.json','[data-huevos]').then()
        }
        if (event.target.id == 5 && view ==1){
            clearContainer(event.target.parentNode.nextElementSibling)
            Mostrar('./database/productos/otros.json','[data-otros]').then()
        }
        if (event.target.id == 5 && view ==0){
            clearContainer(event.target.parentNode.nextElementSibling)
            Ocultar('./database/productos/otros.json','[data-otros]').then()
        }
               
    })
})


Ocultar('./database/productos/vegetales.json','[data-vegetales]')
Ocultar('./database/productos/frutas.json','[data-frutas]')
Ocultar('./database/productos/bandejas.json','[data-bandejas]')
Ocultar('./database/productos/huevos.json','[data-huevos]')
Ocultar('./database/productos/otros.json','[data-otros]')

pintarOfertas('./database/productos/vegetales.json')
pintarOfertas('./database/productos/frutas.json')
pintarOfertas('./database/productos/bandejas.json')
pintarOfertas('./database/productos/huevos.json')
pintarOfertas('./database/productos/otros.json')
}
productos()

