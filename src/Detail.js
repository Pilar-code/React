import React from 'react'
import ItemDetail from './ItemDetail'
import { db } from './firebase'

const Detail = ({Personaje}) => {

  const product = db.Personajes()
  console.log(product.filter)

  return (
    <section>
    {
        Personaje.filter.id((Person)=>{
            return <ItemDetail key={Person.id} {...Person}/>
        })
    }
    </section>
  )
}

export default Detail