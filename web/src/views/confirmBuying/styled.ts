import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  h1{
    text-align: center;
    margin-top: 150px;
  }

  article {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  article > figure > img {
    width: 300px;
  }

  article > section {
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    align-items: baseline;
  }

  article > section > h2 {
    text-align: left;
  }

  article > section > span {
    margin-top: 15px;
  }

  article > section > span > label {
    font-size: 16pt;
  }

  article > section > span > select {
    font-size: 16pt;
    padding: 5px;
  }

  section > button {
    width: 25%;
    background-color: #44E652;
    padding: 30px;
    border: none;
    border-radius: 5px;
    font-size: 18pt;
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: 970px) {
    h1 {
      margin-top: 30px;
    }

    article {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    article > section > span > select {
      width: 100%;
      margin-top: 30px;
      margin-bottom: 30px;
      padding: 10px;
    }

    article > section {
      display: flex;
      align-items: center;
      justify-content: initial;
      text-align: center;
    }

    section > button {
      width: 100%;
      margin: 15px;
    }
  }
`
