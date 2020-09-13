import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 50px;

  .btnReturn{
    cursor: pointer;
    margin-top: 30px;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: left;
    justify-content: left;
  }

  section > h1{
    font-size: 36pt;
    text-align: center;
  }

  section > img{
    width: 20%;
    height: auto;
  }

  section > strong{
    padding: 15px;
    border-bottom: solid 2px #000;
    font-size: 36pt;
    margin: 30px;
  }

  section > .RowContainer{
    display: flex;
    flex-direction: row;
  }

  section > .RowContainer > *{
    margin-left: 30px;
  }

  section > h2{
    margin: 5px;
    text-align:left;
  }

  section > h3 {
    font-size: 30pt;
    margin: 30px;
  }

`
