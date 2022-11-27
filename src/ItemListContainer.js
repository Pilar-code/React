import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {db} from './firebase'
import 'antd/dist/antd.css'
import {collection, where, getDocs, query, doc} from 'firebase/firestore'
import Catalogo from './Catalogo'
import { getProductByCategoryId, getProducts } from "./Utils"
import { toast } from "react-toastify"


const ItemListContainer = () => {

  const [Personaje,setPersonajes] = useState({})

  const {cat} = useParams()


  useEffect(() => {
     
    if(cat){
      const productosCollection = collection(db,"productos")
      const filtro = query(productosCollection, where("category", "===", cat))
      const categoriasProductos = getDocs(filtro)
      categoriasProductos
      .then((respuesta) => {
        const productos = respuesta.docs.map(doc => ({...doc.data(), id: doc.id}))
        console.log(productos)
      })
      .catch((err) => {
        console.log(err)
      })

    }else{      
      const productosCollection = collection(db,"productos") 
      const consulta = getDocs(productosCollection)
      consulta
      .then(respuesta => {
        respuesta.docs.map(doc =>{
          const producto = doc.data();
          producto.id = doc.id
          return producto
        })
      })
      .catch(error => {
          toast.error("Error al cargar los personajes, por favor intente de nuevo")
          
      })
    }
    },[cat])

  return (
    <>
    {Personaje.length === 0 ? toast.info("Cargando personajes", {autoClose: 500}) : <Catalogo Personaje={Personaje.cat}/>}
    </>
  )

}
export default ItemListContainer