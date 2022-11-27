import React from 'react'
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
    /* const [user, setUser] = useState() */

    const valorDelContexto = {
        Personajes : carrito,
        cantidad : total,
        vaciarCarrito : vaciarCarrito,
        /* users : [user, setUser] */

    }
  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CustomProvider