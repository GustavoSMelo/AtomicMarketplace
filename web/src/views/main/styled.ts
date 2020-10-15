import styled, { keyframes } from 'styled-components'

const bannerAnimated = keyframes`
  from{
    opacity: 0;
    transform: translateX(-30%) scale(0.9);
  }to{
    opacity: 1;
    transform: translateX(0%) scale(1);
  }
`

export const Banner = styled.section<{ color: string }>`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;


  section{
    margin-left: 30px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  section > h1{
    border-left: solid ${props => props.color} 10px;
    padding: 50px;
    font-size: 32pt;
    font-weight: bold;
    animation-name: ${bannerAnimated};
    animation-duration: 1s;
  }

  section > small {
    color: #656565;
    font-size: 18pt;
    padding: 50px;
  }

  section > button{
    background-color: ${props => props.color};
    border: none;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    font-size: 18pt;
    cursor: pointer;
    color: #fff;
    margin-top: 15px;
    animation-name: ${bannerAnimated};
    animation-duration: 1s;
  }

  section > h2, section > small{
    animation-name: ${bannerAnimated};
    animation-duration: 1s;
  }

  section > ul{
    display: flex;
    flex-direction: row;
    cursor: pointer
  }

  section > ul > li{
    list-style-type: none;
    margin: 15px;
    margin-top: 50px;
    border-radius: 120px;
    padding: 10px;
    animation-name: ${bannerAnimated};
    animation-duration: 1s;
  }


  article{
    background-color: ${props => props.color};
    display: flex;
    border-bottom-left-radius: 80px;
    border-top-left-radius: 80px;
    width: 40%;
    animation-name: ${bannerAnimated};
    animation-duration: 1s;
  }
  article > img{
    width: 100%;
    position: relative;
    top: 0;
    right: 40%;
    transform: 0.5s;
    animation-name: ${bannerAnimated};
    animation-duration: 1s;
  }

  article > span{
    cursor: pointer;
  }

  article > span> h2{
    text-align: center;
    margin: 10px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 300px;

    section{
      width: 100%;
    }

    section > h1 {
      display: none;
    }

    article {
      width: 100%;
      border-radius: 0px;
      align-items: center;
      justify-content: center;
      margin-top: 300px;
    }

    article > img {
      position: relative;
      left: 5%;
    }
  }
`
export const Container = styled.main`
  padding: 50px;

  ul{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    margin-top: 120px;
  }

  .list-card{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 75%;
    text-align: center;
    padding: 60px;
    transition: 0.35s;
  }

  .list-card:hover{
    box-shadow: 1px 1px 3px #acacac;
    color: #000;
    transition: 0.35s;
    background-color: #CECED1;
  }

  .list-card > .IconContainer{
    display: flex;
    justify-items: right;
    margin-bottom: 30px;
    font-size: 20pt;
    justify-content: space-between;
  }

  .list-card > .IconContainer > .heart{
    cursor: pointer;
  }

  .list-card > figure > img{
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
  }

  .RowContainer {
    display: flex;
    flex-direction: row;
  }

  .Details{
    background-color: #FFF36B;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #000;
    border: none;
    font-size: 12pt;
    margin: 5px;
    cursor: pointer;
    text-decoration: none;
    font-weight: normal;
    width: 70%;
  }

  @media screen and (max-width: 1090px){
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 900px){
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 600px){
    padding: 0px;

    ul{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    ul > *{
      margin-top: 100px;
    }

    .list-card{
      padding: 5px;
    }
  }
`

export const Cart = styled.button<{ background: string, color: string }>`
  background-color: ${props => props.background};
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  border: none;
  font-size: 12pt;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
  border: solid 2px ${props => props.color};
`
