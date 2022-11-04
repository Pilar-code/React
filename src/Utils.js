import alimento1 from './img/alimento1.jpeg'
import alimento2 from './img/alimento2.jpeg'
import cucha1 from './img/cucha1.jpeg'
import cucha2 from './img/cucha2.jpeg'

export let Productos = [
    {id: 1, title:"Cucha1", price:1820, cat: 'Cuchas', image : cucha1, Descripcion:"Cucha gris para perro..."},
    {id: 2, title:"Cucha2", price:1820, cat: 'Cuchas', image: cucha2, Descripcion:"Cucha al para perro..."},
    {id: 3, title:"Alimento1", price:1820, cat: 'Alimentos', image: alimento1, Descripcion:"Alimento marca Royal Canin para perro tamaño pequeño..."},
    {id: 4, title:"Alimento2", price:1820, cat: 'Alimentos', image: alimento2, Descripcion:"Alimento marca Pedigree para perro adulto..."}
]



export const getProducts = () => {

    let pedido = new Promise((respuesta) => {
        setTimeout(() => {
            respuesta(Productos)
        }, 2000)
    })

    return pedido
}

export const getProductByCategoryId = (id) => {

    let pedido = new Promise((respuesta) => {
        setTimeout(() => {
            respuesta(Productos.filter(producto => producto.cat == id))
        }, 2000)
    })

    return pedido
}

export const getItemByCategoryId = (id) => {

    let Descripcion = new Promise((res) => {
        setTimeout(() => {
            res(Productos.find(Productos=> {
                return Productos.id === id})
            )})
    })

    return Descripcion

}