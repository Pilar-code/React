import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { db } from './firebase'
import Detail from './Detail'
import { Personajes } from './Utils'
import { getDocs } from 'firebase/firestore'

const ItemDetalContainer = () => {

  const [Personajes, setPersonaje] = useState({})

  const {id} = useParams()
  console.log({id});

  useEffect(() => {
    const personajesCollection = collection(db, "personajes")
    const refe = doc(personajesCollection,id) 
    const consulta = getDocs(personajesCollection)

    consulta
    .then((res) => {
      setPersonaje(res.data())
    })
    .catch((err) => {      
      console.log(err)
    })
  },[id])

    return (
      <ItemDetail producto={{id,...item}}/>
    )
  }
  

export default ItemDetalContainer