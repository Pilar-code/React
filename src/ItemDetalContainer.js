import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { db } from './firebase'
import Detail from './Detail'
import { getDocs, collection, doc } from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import Item from './Item'

const ItemDetalContainer = () => {

  const [Personaje, setPersonaje] = useState({})

  const {id} = useParams()
  /* console.log({id}); */

  useEffect(() => {
    const personajesCollection = collection(db, "productos")
    const refe = doc(personajesCollection,id) 
    const consulta = getDocs(refe)

    consulta
    .then((res) => {
      setPersonaje(res.data())
    })
    .catch((err) => {      
      console.log(err)
    })
  },[id])

    return (
      <ItemDetail Personaje={{id,...Personaje}}/>
    )
  }
  

export default ItemDetalContainer