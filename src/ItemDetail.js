import { useContext, useState } from "react"
import { contexto, useCarrito } from "./CustomProvider"
import Contador from "./Contador"

const ItemDetail = ({ Person }) => {

    //const {agregarProducto} = useContext(contexto)
    const { valorDelContexto } = useCarrito()
    const [cantidad, setCantidad] = useState(1)
    const [confirmado, setConfirmado] = useState(false)


    const handleOnAdd = (cantidadAgregada) => {
        console.log("Se agregaron " + cantidadAgregada + " productos")
        console.log(Person)
        setCantidad(cantidad)
        setConfirmado(true)
    }

    const agregarAlCarrito = () => {
        valorDelContexto(Person,cantidad)
    }

    return (
        <div  className="product__card card">
            <h2 className="card__title">{Person.title} - ${Person.price}</h2>
            <div className="detail-flex">
                <img src={Person.img} alt={Person.title} className="card__img"/>
                <div>
                    <p>{Person.Description}</p>
                    <Contador init={cantidad} handleOnAdd={handleOnAdd} />
                    {confirmado && <button onClick={agregarAlCarrito}>agregar al carrito</button>}
                </div>
            </div>
        </div>
    )

}
export default ItemDetail