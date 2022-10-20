import { Card } from 'antd';
import React from 'react'
import 'antd/dist/antd.css';


const ItemListContainer = (greeting) => {
  return (
    <>
    <Card title="elemento" style={{ width: '200px', margin: '20px',  backgroundColor: '#b37feb'}}>{greeting.elemento}</Card>
    </>
  )
}

export default ItemListContainer