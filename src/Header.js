import React from 'react'
import IconoNav from './CartWidget'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
        <h1>
            <IconoNav />
            <Link to="/"> <p>PetShop</p> </Link>
        </h1>
  )
}

export default Header