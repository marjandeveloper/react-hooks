import React, { useState } from 'react'

function UseStateInput() {
  const [inputValue, setInputValue] = useState('Marjan')
  let onChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }
  return (
    <div>
      <input placeholder='enter something....' onChange={onChange} />
      {inputValue}
    </div>
  )
}

export default UseStateInput
