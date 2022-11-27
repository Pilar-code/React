import Contador from './Contador'
import React from 'react-router-dom'
import { toast } from 'react-toastify'
import {contexto} from "./CustomProvider"
import {contador} from './Contador'
import { useContext } from 'react'

const ItemDetail = ({personaje}) => {
  
  const valorDelContexto = useContext(contexto)

  const handleOnAdd = (cantidadAgregada) => {
    toast.info("se agregaron" + (cantidadAgregada) + "Productos al carrito", {autoClose: 500})
  }

  const agregarAlCarrito = () => {
    valorDelContexto.vaciarCarrito()
  }

  return (
    <div className="product__card card">
       <h2 className="card__title">{personaje.title}</h2>
       <img src={personaje.img} className="card__img"/>
       <p><contador/></p>
       <p>{personaje.Descripcion}</p>
       <contador handleOnAdd={handleOnAdd}/>
       <button onClick={agregarAlCarrito}>vaciar carrito</button>
    </div>
  )
}

export default ItemDetail