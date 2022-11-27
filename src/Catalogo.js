import Item from "./Item"
import {Personajes} from './Utils'

const Catalogo = (Personaje) => {
  return (
    <section>
    {
        Personajes.map((Personaj)=>{
            return <Item key={Personaj.cat} {...Personaje}/>
        })
    }
    </section>
  )

}

export default Catalogo