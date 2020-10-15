import styled, { keyframes } from 'styled-components'

const ImageAnimation = keyframes`
  0%{
    transform: translateY(0%);
  }
  50%{
    transform: translateY(-10%);
  }
  100%{
    transform: translateY(0%);
  }
`

export const Container = styled.main<{ needHelp: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .InputSearch {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }

  .InputSearch > button {
    background-color: transparent;
    border:none;
    font-size: 26pt;
    cursor: pointer;
    margin: 30px;
    padding: 25px;
  }

  .HelpSearch {
    display: ${props => props.needHelp ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .HelpSearch > h1{
    margin-bottom: 35px;
  }

  .HelpSearch > ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .HelpSearch > ul > li {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    list-style-type: none;
    padding: 30px;
    margin: 5px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.5s;
    border: solid 2px #fff;
  }

  .HelpSearch > ul > li > figure{
    width: 100%;
  }

  .HelpSearch > ul > li:hover{
    transition: 0.5s;
    border: solid 2px #909090;
  }

  .HelpSearch > ul > li > figure:hover{
    transition: 0.5s;
    animation-name: ${ImageAnimation};
    animation-duration: 1s;
  }

  .HelpSearch > ul > li > figure> img{
    width: 120px;
  }

  .SearchContainer{
    display: ${props => props.needHelp ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: center;
    padding: 30px;
  }

  .SearchContainer > .RowContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }

  .SearchContainer > .RowContainer > small{
    font-size: 14pt;
    color: #656565;
  }

  .SearchContainer > ul{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
  }

  .SearchContainer > ul > li{
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    width: 75%;
    box-shadow: 2px 2px 1px #acacac;
  }

  .SearchContainer > ul > li > .HeaderContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .SearchContainer > ul > li > figure > img {
    width: 100%;
  }

  .SearchContainer > ul > li > .Controls{
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .SearchContainer > ul > li > .Controls > .Bag{
    padding: 30px;
    cursor: pointer;
  }

  .SearchContainer > ul > li > .Controls > .ButtonLink{
    color: #000;
    text-decoration: none !important;
  }

  .SearchContainer > ul > li > .Controls > .ButtonLink > button{
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18pt;
    padding: 20px;
    border: none;
    border-radius: 5px;
    background-color: #FFF36B;
    cursor: pointer;
    color: #000;
    text-decoration: none !important;
  }

  @media screen and (max-width: 800px) {
    .HelpSearch > ul {
      display: flex;
      flex-direction: column;
    }

    .HelpSearch > h1 {
      font-size: 14pt;
      text-align: center;
    }

    .InputSearch > input {
      width: 75%;
      font-size: 14pt;
      margin-left: 10px;
    }

    .InputSearch > button {
      width: 25%;
    }

    .SearchContainer > ul{
      display: flex;
      flex-direction: column;
    }

    .RowContainer > h2{
      font-size: 14pt;
    }
  }
`
