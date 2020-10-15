import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #CECED1;
  color: #000;
  display: flex;
  flex-direction: row;
  padding: 30px;

  aside{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 40px;
    border-right: 2px solid #909090;
  }

  aside > span{
    display: flex;
    flex-direction: column;
    margin: 15px;
    align-items: center;
    justify-content: center;
  }

  article{
    padding: 30px;
    border-right: 2px solid #909090;
  }

  article > ul > li{
    padding: 5px;
    list-style-type: none;
    cursor: pointer;
  }

  section{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
  }

  section > span{
    display: flex;
    flex-direction: column;
    margin: 15px;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1160px) {
    padding: 10px;

    aside {
      padding: 10px
    }

    article {
      padding: 10px;
    }
  }

  @media screen and (max-width: 970px) {
    flex-direction: column;

    aside, article, section {
      border: none;
      padding: 0px;
    }

    article {
      text-align: center;
    }

    article > h2 {
      font-size: 14pt;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`
