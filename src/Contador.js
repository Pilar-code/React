import { Button } from 'antd';
import React from 'react'
import { useEffect, useState } from "react"

const Contador = () => {
    const [cant, setCant] = useState(0);

    const sumar = () => {
        setCant(cant + 1)
    }

    const restar = () => {
        setCant(cant - 1)
    }

    const Aceptar = () => {

    }

  return (
    <>
    <div>
        <Button onClick={sumar}>+</Button>
        <p>{cant}</p>
        <Button onClick={restar}>-</Button>
    </div>
    <Button>Aceptar</Button>
    </>
  )
}

export default Contador