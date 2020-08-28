import React from 'react'

import './style.css'
interface ButtonProps {
  value: string;
  type: string;
}
const button: React.FC<ButtonProps> = ({ value, type }) => {
  return (
    <>
      <input type={type} value={value} className="btn" />
    </>
  )
}

export default button
