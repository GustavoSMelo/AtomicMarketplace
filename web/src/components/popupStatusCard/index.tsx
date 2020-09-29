import React from 'react'
import { Container } from './styled'

interface popupProps {
  backgroundcolor: string,
  textcolor: string,
  content: string
}

const popupStatusCard:React.FC<popupProps> = ({backgroundcolor, textcolor, content}) => {
  return (
    <Container backgroundcolor={backgroundcolor} textcolor={textcolor}>
      <h1>{content}</h1>
    </Container>
  )
}

export default popupStatusCard
