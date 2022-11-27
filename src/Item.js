import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Item= ({title , img , id}) => {

  return (
    <>
     <article className="product__card card" >
            <h1 className="card__title">{title}</h1>
            <img src={img} className="card__img"/>
            <br/><button className="card__button">
              <Link to ={"/item/" + id}>Detalle</Link>
            </button>
    </article>
    </>
  )
}

export default Item