import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  form > h1{
    text-align: center;
    margin-top: 120px;
    margin-bottom: 30px;
  }

  form > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  form > button {
    padding: 30px;
    font-size: 16pt;
    margin-top: 30px;
    margin-bottom: 30px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    transition: 0.35s;
  }

  form > button:hover{
    background-color: #202020;
    transition: 0.35s;
  }
`
