import React from 'react';
import Navbar from '../../components/navbar';
import Input from '../../components/input'
import Button from '../../components/button'
import { Container } from './styled';

const EditProducts: React.FC = () => {
  return <>
    <Navbar />
    <Container>
      <h3>Bem vindo a edição de Produto</h3>

      <form>
        <Input type="text" placeholder="Nome do Produto" />
        <Input type="number" placeholder="Aumentar o diminuir quantidade" />
        <Input type="number" placeholder="Preço do produto" />

        {/*ADICIONAR INPUT PARA UPLOAD DE IMAGEM */}

        <select name="categorias" className="categorias">
          <option value="0">Selecione uma categoria</option>
          <option value="1">Eletrônicos</option>
          <option value="2" >Beleza</option>
        </select>
        <h3>Descrição do Produto</h3>
        <textarea name="descricao" id="descricao" className="descricao" ></textarea>

        <Button type="button" value="Editar Produto" />
      </form>
    </Container>
  </>;
}

export default EditProducts;
