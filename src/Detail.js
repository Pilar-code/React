import React from 'react'
import ItemDetail from './ItemDetail'
import {Personajes} from './Utils'

const Detail = ({Personaje}) => {
  return (
    
    <section>
    {
        Personaje.map((Personaje)=>{
            return <ItemDetail key={Personaje.cat} {...Personaje}/>
        })
    }
    </section>
  )
}

export default Detail