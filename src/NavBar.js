import React from 'react';
import IconoNav from './CartWidget'
import {ShoppingCartOutlined} from '@ant-design/icons'
import ItemListContainer from './ItemListContainer';

const NavBar = (nombre) => {
  return (
    <>
    <nav id='navStyle'>
      <h1>
        <IconoNav />
        <p>PetShop de {nombre.persona}</p>
      </h1>
      <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>Sale</li>
        <li>Nosotros</li>
        <li><ShoppingCartOutlined style={{fontSize:'23px'}} /></li>
      </ul>
    </nav>
    <ItemListContainer elemento ="Cucha 1"/>
    </>
  )
}

export default NavBar