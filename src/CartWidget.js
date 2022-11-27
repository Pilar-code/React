import { useContext } from "react"
import { Link } from "react-router-dom"
import {contexto} from "./CustomProvider"

const CartWidget = () => {

  const cantidadProductos = useContext(contexto)

  return (
    <Link to = "/Carrito">
    <div clasName="material-icons">shopping_cart</div>
    <span>{cantidadProductos.cantidad}</span>
    </Link>
  )
}

export default CartWidget