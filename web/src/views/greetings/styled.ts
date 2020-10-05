import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h1, h2, small{
    margin: 3px;
  }

  small{
    color: #707070;
  }

  .iconCheck{
    margin: 30px;
    cursor: pointer;
  }
`
