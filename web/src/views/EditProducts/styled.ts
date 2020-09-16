import styled from 'styled-components'
export const Container = styled.main`
padding-top:5rem;
width:100vw;

h3{
  margin-top:3rem;
  margin-left:3rem;
  margin-bottom:1rem;
}
form{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
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
`
