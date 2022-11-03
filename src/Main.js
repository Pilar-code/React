import React from 'react'
import { Routes , Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import ItemListContainer from './ItemListContainer'
import ItemDealContainer from './ItemDealContainer'

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDealContainer/>}/>
                <Route path="/Carrito" element={<p>Carrito</p>}/>
            </Routes>
        </main>
    )
}

export default Main