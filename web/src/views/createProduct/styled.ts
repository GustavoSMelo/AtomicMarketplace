import styled from 'styled-components'

export const Container = styled.main`
 padding: 8rem;

 .dropzone{
  display: none;
  }
  form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:2rem;
  }
  label{
  margin:2rem;
    padding: 8rem;
    border-radius: 10px;
    background-color: #ffebcd;
    cursor: pointer;
  }
  .upload-image{
    margin-right: 3px;
    margin-bottom: -5px;
  }
  .input-group>input{
  margin-right:25px;
  }
  .categorias{
    font-size: 20px;
    padding: 2rem;
    width:24rem;
    border-width: 3px;
    border-radius: 2px;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-color: #161616;
    background-color:transparent;
    margin-right:25px;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .descricao{
    overflow: auto;
    width: 60%;
    height:300px;
    resize:none;
    border: 1px solid #000;
    border-radius:5px;
    margin-top: 10px;
  }
  .descricao::-webkit-scrollbar {
    width: 6px;
  }
  /* Handle */
  .descricao::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  .descricao::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media screen and (max-width: 1140px) {
    padding: 10px;
    text-align: center;
  }

  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;

    .upload-image,.input-group, .descricao  {
      width: 80%
    }
  }
`
