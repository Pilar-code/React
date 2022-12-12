import { createContext, useState, useContext } from "react"
export const contexto = createContext()
const { Provider } = contexto



export const useCarrito = () => {
    return useContext(contexto)
}


const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    const borrarItem = (id) => {

    }

    const agregarProducto = (producto, cantidad) => {
        if (isInCart.inCart) {
        } else {
            console.log("producto nuevo en el carrito!")
            setCarrito([
                ...carrito,
                { ...producto, cantidad }
            ])
            setTotal(total + producto.price * cantidad)
            setCantidadTotal(cantidadTotal + cantidad)
            //pusheo al array
            /* const prodConCant = {
                ...producto,
                cantidad: cantidad
            } */
        }
    
    }

    const isInCart = (id) => {
        //return true o false
        return { inCart: false, item: {}, index: 0 }
    }


    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
        cantidadTotal : cantidadTotal,
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider












/* import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const contexto = createContext()
const {Provider} = contexto

const CustomProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const [total, setTotal] = useState(4)//set total y set carrito son las funciones por las que voy a poder modificar el carrio y la cantidad de productos que tenga

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }
    /* const [user, setUser] = useState() 

    const valorDelContexto = {
        Personajes : carrito,
        cantidad : total,
        vaciarCarrito : vaciarCarrito,
        /* users : [user, setUser] 

    }
  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CustomProvider */