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
  width:600px;
max-width:600px;
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
  margin:5px 3px 5px;
  height:63px;
  width:100px;
  max-width: 100px;
  max-height:63px;

}

.buttons-delete{
  width:320px;
 max-width:320px;
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
  .buttons-delete{
    max-width:110px;
  }
}




`
