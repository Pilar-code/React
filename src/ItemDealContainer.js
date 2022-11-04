import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Detail from './Detail'
import { getItemByCategoryId} from './Utils'
import { toast } from "react-toastify"
import { Productos } from './Utils'


const ItemDealContainer = () => {

  const [Producto, setProducto] = useState({})

  const {id} = useParams()
  console.log({id});

  useEffect((id) => {
    getItemByCategoryId(id)
    .then((res) => {
      setProducto(res)
    })
    .catch((err) => {      
      toast.error(err)
    })
  },[id])

    return (
      <>
      {Productos.length == 0? (toast.info("Cargando productos", {autoClose: 500})) : <Detail Producto={Producto}/>}
      </>
    )
  }
  

export default ItemDealContainer