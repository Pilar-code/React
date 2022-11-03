import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import 'antd/dist/antd.css'
import Catalogo from './Catalogo'
import { getProductByCategoryId, getProducts } from "./Utils"
import { toast } from "react-toastify"

const ItemListContainer = () => {

  const [productos,setProductos] = useState({})

  const {cat} = useParams()
  console.log({cat});

  useEffect(()=>{
    if(cat){
      getProductByCategoryId(cat) 
      .then((res) =>{
        toast.dismiss(res)
        setProductos(res)
      })
      .catch((err) =>{
        toast.error(err)
      })
    }else{
      getProducts()
      .then(respuesta => {
        setProductos(respuesta)
      })
      .catch(error => {
          toast.error("Error al cargar los productos, por favor intente de nuevo")
          console.log(error)
      })
    }
    },[cat])

  return (
    <>
    {productos.length == 0 ? toast.info("Cargando productos", {autoClose: 500}) : <Catalogo productos={productos}/>}
    </>
  )

}
export default ItemListContainer