import {Productos} from './Utils'
import Contador from './Contador'

const ItemDetail = () => {
    
  return (
    <div>
       <h2 className="card__title">{Productos.title}</h2>
       <h2>${Productos.price}</h2>
       <img src={Productos.image} className="card__img"/>
       <p><Contador/></p>
       <p>{Productos.descripcion}</p>
    </div>
  )
}

export default ItemDetail