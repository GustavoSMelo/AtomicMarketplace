import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    margin: 30px;
    color: #0a0a0a;
  }

  section {
    display: flex;
    flex-direction: row;
  }

  section > .link > figure{
    margin: 15px;
    border: solid 3px #acacac;
    padding: 30px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    color: #0a0a0a;
    width: 100px;
    height: 100px;
  }

  section > .link {
    text-decoration: none;
  }

  section > .link > figure > img {
    width: 80px;
    margin: 5px;
  }

  .product-title{
    margin-top: 50px;
  }

  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  article > ul{
    list-style-type: none;
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  article > ul > li {
    display:flex;
    flex-direction: row;
    border: solid 3px #acacac;
    border-radius: 10px;
    margin: 10px;
    justify-content: space-between;
    width: 70%;
    padding: 15px;
  }

  article > ul > li > figure{
    display:flex;
    flex-direction: row;
    align-items: center;
    text-align: left !important;
  }

  article > ul > li > figure > img {
    width: 300px;
  }

  article > ul > li > figure > figcaption {
    font-size: 18pt;
  }

  article > ul > li > span{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  }

  article > ul > li > span > *{
    margin: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 880px) {
    section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    article > ul > li,article > ul > li > figure  {
      flex-direction: column;
    }

    article > ul > li > figure, article > ul > li > figure > img {
      width: 100%;
    }
  }

  @media screen and (max-width: 380px) {
    section{
      display: flex;
      flex-direction: column;
    }

    section > .link > figure {
      width: 200px;
    }
  }

`
