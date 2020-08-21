import React from 'react'

import './style.css'
interface IntputProps {
  placeholder: string;
  type: string;
}
const input: React.FC<IntputProps> = ({ placeholder, type }) => {
  return (
    <>
      <input className="input-data" type={type} placeholder={placeholder} required />
    </>
  )
}

export default input
