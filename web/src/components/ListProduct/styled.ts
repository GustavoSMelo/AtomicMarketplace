import styled from 'styled-components'

export const Main = styled.main`


section{
  display:flex;
  justify-content:space-around;

  margin-bottom:10px;
  padding:10px;

}
section .image-product{
  background-color: #ccc;
padding: 5% 3% 5%;


  border-radius:5px;
  margin-right:2rem;
}
section .data-product{
  display:flex;

  justify-content:space-between;

}
section .data-product>p{
  margin-right:15px;
  white-space:normal;
}

section .buttons-delete>button{
  background-color: #fff;
  border: 1px solid #000;
  padding:15px;
  font-size: 14px;
  margin-right:5px;
  margin-bottom:5px;

}

section .buttons-delete>button:hover{
  background-color: #000;
  color:#ccc;
  cursor: pointer;
}




section .data-product>p{
  white-space:nowrap;
}


@media(max-width:1150px){
  .date-product{
    display:none;
  }
}




`
