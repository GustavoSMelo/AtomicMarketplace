import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  height: 100vh;

  aside{
    width: 30%;
    height: 100vh;
    border-right: solid 3px #000;
  }

  aside > ul{
    margin-top: 45px;
  }

  aside > ul > .Link{
    padding: 0px;
  }
  aside > ul > .Link > li {
    padding: 50px;
    list-style-type: none;
    cursor: pointer;
    transition: 250ms;
    font-size: 18pt;
    color: #000;
    text-decoration: none;
  }

  aside > ul > .Link > li:hover {
    background-color: #e0e0e0;
    transition: 250ms;
  }

  aside > ul > .Link > li:nth-child(1) {
    border-bottom: solid 1px #000;
  }

  aside > ul > .Link > li:nth-child(2) {
    border-bottom: solid 1px #000;
  }

  aside > ul > .Link > li:nth-child(3) {
    border-bottom: solid 1px #000;
  }

  article{
    width: 70%;
    height: 100vh;
    margin-top: 45px;
    padding: 30px;
  }

  article > .WalletContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  article > .WalletContainer > span{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  article > .WalletContainer > span > section{
    display: flex;
    flex-direction: column;
  }

  article > .WalletContainer > span > h1 {
    margin: 15px;
    font-size: 26pt;
  }
  article > h1 {
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 28pt;
  }

  article > .LocationUser{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  article > .LocationUser > h3{
    font-size: 16pt;
  }

  article > div{
    display: flex;
    flex-direction: column;
  }

  article > div > span{
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    align-items: center;
    margin-bottom: 20px;
  }

  article > div > span > h2{
    font-size: 18pt;
  }

  article > div > span > h3{
    font-size: 16pt;
  }

  article > div > button{
    background-color: #F2EE5A;
    border: solid 2px #000;
    border-radius: 5px;
    width: 250px;
    margin-left: 30px;
    cursor: pointer;
    padding: 15px;
    font-size: 18pt;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;

    aside {
      width: 100%;
      border: none;
    }

    aside > ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: solid 1px #000;
      width: 100%;
    }
    aside > ul > .Link {
      width: 33%;
    }
    aside > ul > .Link > li {
      border: none !important;
      font-size: 12pt;
      padding: 5px;
      margin-top: 80px;
    }

    aside > ul > .Link:nth-child(1) {
      border-right: solid 1px #000;
    }
    aside > ul > .Link:nth-child(2) {
      border-right: solid 1px #000;
    }
  }
`
