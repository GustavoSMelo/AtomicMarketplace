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
`
