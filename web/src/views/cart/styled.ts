import styled from 'styled-components'

export const Container = styled.main<{ haveProduct: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section{
    display: ${props => props.haveProduct ? 'none' : 'flex'};
    flex-direction: column;
  }

  section > img {
    margin-top: 50px;
    margin-bottom: 10px;
  }

  section > h1{
    font-size: 30pt;
    margin-bottom: 10px;
  }

  section > button{
    margin: 10px;
    background-color: #101010;
    border: none;
    border-radius: 10px;
    padding: 15px;
    font-size: 20pt;
    color: #fff;
    cursor: pointer;
  }

  article {
    display: ${props => props.haveProduct ? 'flex' : 'none'};
    margin-top: 80px;
    border-radius: 10px;
  }

  article > ul > li{
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    margin: 35px;
    border: solid 2px #101010;
  }

  article > ul > li > figure {
    width: 30%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  article > ul > li > figure > img {
    width: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  article > ul > li > span{
    width: 50%;
    padding: 15px;
    color: #101010;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }

  article > ul > li > span > h1{
    font-size: 32pt;
  }

  article > ul > li > span > button {
    width: 320px;
    margin-top: 15px;
    padding: 15px;
    font-weight: bold;
    font-size: 16pt;
    border: none;
    border-radius: 10px;
    background-color: #F74A4A;
    color: #fff;
    cursor: pointer;
  }
`
