import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;

  h1{
    margin-top: 45px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  form > span > * {
    margin: 5px;
  }

  button {
    background-color: #000;
    border: none;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 14pt;
    cursor: pointer;
    width: 300px;
    margin: 30px;
  }

  @media screen and (max-width: 600px) {
    form > span {
      display: flex;
      flex-direction: column;
    }
  }
`
