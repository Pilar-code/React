import React from 'react'
import ItemDetail from './ItemDetail'
import { Productos } from './Utils'

const Detail = (producto) => {
  return (
    
    <section>
    {
        Productos.map((Producto)=>{
            return <ItemDetail key={Producto.id} {...Producto}/>
        })
    }
    </section>
  )
}

export default Detail