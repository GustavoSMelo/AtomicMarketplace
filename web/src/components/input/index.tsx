import React from 'react'

import './style.css'
interface IntputProps {
  placeholder: string;
  type: string;
  min?: string;
  onTextChanged?: any;
  value?: string | number
}
const input: React.FC<IntputProps> = ({ placeholder, type, min, onTextChanged, value }) => {
  return (
    <>
      <input data-testid='input-component'
        className="input-data"
        value={value}
        onChange={e => onTextChanged(e.target.value)}
        type={type}
        placeholder={placeholder}
        min={min}
        required />
    </>
  )
}

export default input
