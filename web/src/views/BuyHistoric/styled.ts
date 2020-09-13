import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  .btnReturn{
    margin-top: 100px;
    margin-left: 30px;
    margin-bottom: 10px;
  }

  h1{
    margin: 30px;
    text-align: center;

  }

  ul{
    width: 100%;
  }

  ul > li{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    border-bottom: 2px solid #000;

  }
  ul > li:first-child{
    border-top: 2px solid #000;
  }

  ul > li > figure{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  ul > li > figure > img{
    width: 80px;
    height: 80px;
  }

  ul > li > section > p{
    margin: 10px;
  }
`
