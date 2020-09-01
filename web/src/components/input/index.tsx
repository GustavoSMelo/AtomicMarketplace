import React from 'react'

import './style.css'
interface IntputProps {
  placeholder: string;
  type: string;
  min?: string;
}
const input: React.FC<IntputProps> = ({ placeholder, type, min }) => {
  return (
    <>
      <input data-testid='input-component' className="input-data" type={type} placeholder={placeholder} min={min} required />
    </>
  )
}

export default input
