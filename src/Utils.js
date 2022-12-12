import BenStone from './img/BenStone.jpg'
import CalStone from './img/CalStone.jpg'
import DreaMikami from './img/DreaMikami.webp'
import EaganTehrani from './img/EaganTehrani.png'

export let Personajes = [
    {id: 1, title:"Ben Stone", cat: 'Pasajero',Image: BenStone, Descripcion:"Cucha gris para perro..."},
    {id: 2, title:"Cal Stone", cat: 'Pasajero', Image: CalStone, Descripcion:"Cucha al para perro..."},
    {id: 3, title:"Drea Mikami", cat: 'noPasajero', Image: DreaMikami,Descripcion:"Alimento marca Royal Canin para perro tamaño pequeño..."},
    {id: 4, title:"Eagan Tehrani",  cat: 'Pasajero', Image: EaganTehrani,Descripcion:"Alimento marca Pedigree para perro adulto..."}
]



export const getProducts = () => {

    let pedido = new Promise((respuesta) => {
        setTimeout(() => {
            respuesta(Personajes)
        }, 2000)
    })

    return pedido
}

export const getProductByCategoryId = (cat) => {

    let pedido = new Promise((respuesta) => {
        setTimeout(() => {
            respuesta(Personajes.filter(Personaje => Personaje.cat === cat))
        }, 2000)
    })

    return pedido
}

export const getItemByCategoryId = (id) => {

    let Descripcion = new Promise((res) => {
        setTimeout(() => {
            res(Personajes.find(Personajes=> {
                return Personajes.id === id})
            )})
    })

    return Descripcion

}