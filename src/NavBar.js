import React from 'react';
import {ShoppingCartOutlined} from '@ant-design/icons'
import {NavLink} from 'react-router-dom'
import 'antd/dist/antd.css'; 
import Header from './Header'
import CartWidget from './CartWidget';
import {db} from './firebase'


const Nav = () => {
  return (
    <>
    <nav id='nav__Style'>
      <Header />
      <ul>
        <NavLink to="/productos/noPasajero">No Pasajeros</NavLink>
        <NavLink to="/productos/Pasajero">Pasajeros</NavLink>
        <CartWidget/>
      </ul>
    </nav>
    </>
  )
}

export default Nav