import styled from 'styled-components'

export const Container = styled.main<{hasFavorites : boolean}>`
  padding: 30px;

  .title{
    display: ${props => props.hasFavorites ? 'flex' : 'none'};
    margin-top: 100px;
    flex-direction:row;
    justify-content: center;
    align-items: center;
  }

  .title > figure > img{
    width: 80px;
    height: 80px;
  }

  .title > h1 {
  }

  section {
    display: ${props => props.hasFavorites ? 'grid' : 'none'};
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    margin-top: 30px;
  }

  section > .Card {
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-shadow: 1px 1px 6px #acacac;
    align-items: center;
  }

  section > .Card > .HeaderCard{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  section > .Card > figure > img{
    width: 100%;
  }

  section > .Card > button{
    width: 200px;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: #0f0;
    padding: 15px;
    margin: 15px;
    border-radius: 5px;
  }

  article {
    display: ${props => props.hasFavorites ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 130px;
  }

  article > figure > img{
    width: 70%;
  }
`
