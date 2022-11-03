import React from 'react';
import {ShoppingCartOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css'; 
import Header from './Header'

const Nav = () => {
  return (
    <>
    <nav id='nav__Style'>
      <Header />
      <ul>
        <Link to="/category/Cuchas">Cuchas</Link>
        <Link to="/category/Alimentos">Alimentos</Link>
        <Link to="/category/Carrito"><ShoppingCartOutlined style={{fontSize:'23px'}} /></Link>
      </ul>
    </nav>
    </>
  )
}

export default Nav