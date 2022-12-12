import Item from "./Item"

const Catalogo = ({Personajes}) => {
  return (
    <section>
    {
        Personajes.map((Personaje)=>{
            return <Item key={Personaje.id} {...Personaje}/>
        })
    }
    </section>
  )

}

export default Catalogo