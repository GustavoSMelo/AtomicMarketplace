import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Icon{
    margin-top: 120px;
    cursor: pointer;
  }

  h1{
    margin-top: 80px;
    text-align: center;
    margin-bottom: 20px;
  }
  .Card{
    padding: 15px;
    border: solid 2px #000;
    width: 60%;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
  }
  .Card > figure{
    width: 40%;
  }

  .Card > figure > img{
    width: 300px;
  }

  .Card > section {
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: baseline;
    padding: 10px;
  }

  .Card > section > h1{
    font-size: 24pt;
    text-align: left;
  }

  .Card > section > h2{
    margin-bottom: 50px;
  }

  .Card > section > span{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .Card > section > span > .LinkButton > button{
    border: none;
    padding: 30px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16pt;
    box-shadow: 3px 3px 6px #acacac;
  }

  .Card > section > span > article{
    font-size: 18pt;
  }
`
