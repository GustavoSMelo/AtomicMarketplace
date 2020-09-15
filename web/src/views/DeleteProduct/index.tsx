import React from 'react';
import Navbar from '../../components/navbar';
import { RiShoppingCartLine, RiDeleteBinLine } from 'react-icons/ri'
import { Container } from './styled';
import ListProduct from '../../components/ListProduct';

const DeleteProduct: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h2>Quais Produtos deseja deletar?</h2>
        <h4> <RiShoppingCartLine size={18} /> Histórico de produtos </h4>
        <ListProduct />
        <ListProduct />

        <ListProduct />

        <ListProduct />


      </Container>
    </>
  );
}

export default DeleteProduct;
