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
        <ListProduct image="a" nameProduct="nike air jordan" date="14/10/2020" quantity={25} />
        <ListProduct image="b" nameProduct="nike 99" date="15/19/2020" quantity={105} />

        <ListProduct image="c" nameProduct="Adidas bluez" date="14/10/2021" quantity={75} />

        <ListProduct image="d" nameProduct="nick x travis" date="14/01/2020" quantity={50} />


      </Container>
    </>
  );
}

export default DeleteProduct;
