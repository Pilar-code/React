import { Productos } from "./Utils"
import Item from "./Item"


const Catalogo = (productos) => {
  return (
    <section>
    {
        Productos.map((Producto)=>{
            return <Item key={Producto.cat} {...Producto}/>
        })
    }
    </section>
  )

}

export default Catalogo