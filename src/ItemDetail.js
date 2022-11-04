import Contador from './Contador'

const ItemDetail = (producto) => {
    
  return (
    <div>
       <h2 className="card__title">{producto.title}</h2>
       <h2>${producto.price}</h2>
       <img src={producto.image} className="card__img"/>
       <p><Contador/></p>
       <p>{producto.descripcion}</p>
    </div>
  )
}

export default ItemDetail