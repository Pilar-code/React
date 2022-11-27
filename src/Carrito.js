import { useRef, useState } from "react"
import {db} from './firebase'

const Carrito = () => {

    const refName = useRef() //es otro hook de estado
    const refAge = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refName.current.value)
        console.log(refAge.current.value)
    }

    //console.log("render de nuevo")

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input ref={refName} type="text"/>
                </div>

                <div>
                    <input ref={refAge}  type="text"/>
                </div>

                <button >guardar</button>
            </form>
        </div>
    )
}

export default Carrito