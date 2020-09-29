import styled, {keyframes} from 'styled-components'

const animationAppear = keyframes`
  from{
    opacity: 0;
    transform: translateY(30%);
  }
  to{
    opacity: 1
    transform: translateX(0%);
  }
`

export const Container = styled.section<{backgroundcolor: string, textcolor: string}>`
  display: flex;
  margin: auto;
  position: fixed;
  z-index: 10;
  background-color: ${props => props.backgroundcolor};
  padding: 30px;
  text-align: center;
  color: ${props => props.textcolor};
  bottom:0;
  border-radius: 10px;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  width: max-content;
  animation-name: ${animationAppear};
  animation-duration: 750ms;
`
