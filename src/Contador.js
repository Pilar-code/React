/* import React, { useState } from "react"

  
const contador = ({handleOnAdd/* ,stock }) => {
  
  const [count , setCount] = useState();

  const handleSumar = (e) => {
      console.log(e)
      console.log(e.target)
      e.stopPropagation()
      setCount(count + 1);
  }

  const handleRestar = (e) => {
      console.log(e.target)
      setCount(count - 1);
  }

  const handleChange = (e) => {
      const codigo = e.key.charCodeAt()
      if (codigo > 96 && codigo < 123) {
          console.log(e.key,codigo)
      }else{
          e.preventDefault()
      }
  }

  const handleConfirmar = () => {
      handleOnAdd(count)
  }
  const handleDivClick = (e) => {
      console.log(e.target)
  }

  return (
    <div onClick={handleDivClick}>
      <div className="counter-actions">
        <input type="text" onKeyDown={handleChange}/>
        <button onClick={handleSumar}>+</button>
        <p>{count}</p>
        <button onClick={handleRestar}>-</button>
      </div>
      <button onClick={handleConfirmar}>confirmar</button>
    </div>
  )
}

export default contador */