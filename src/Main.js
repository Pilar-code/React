import React from 'react'
import { Routes , Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import ItemListContainer from './ItemListContainer'
import ItemDetalContainer from './ItemDetalContainer'
import Carrito from './Carrito'

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos/:cat" element={<ItemListContainer/>}/>
                <Route path="/item/:cat" element={<ItemDetalContainer/>}/>
                <Route path="/Carrito" element={<Carrito/>}/>
            </Routes>
        </main>
    )
}

export default Main