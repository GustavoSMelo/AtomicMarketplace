import React from 'react'
import './style.css'

interface ButtonProps {
  value: string;
  type: string;
  onClickFunction?: any;
}
const button: React.FC<ButtonProps> = ({ value, type, onClickFunction }) => {
  return (
    <>
      <input type={type} value={value} className="btn" onClick={() => onClickFunction()}/>
    </>
  )
}

export default button
