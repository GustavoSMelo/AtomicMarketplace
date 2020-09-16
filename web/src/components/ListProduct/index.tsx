import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri'
import { RiEditFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

import { Main } from './styled';

interface listProductProps {
  image: string;
  nameProduct: string;
  date: string;
  quantity: number;
}
const ListProduct: React.FC<listProductProps> = ({ image, nameProduct, date, quantity }) => {
  return <>
    <Main>
      <section>

        <img src={image} alt="imagem do produto" />

        <div className="data-product">
          <p>Nome do Produto: <strong>{nameProduct}</strong></p>
          <p className="date-product">Adicionado em: <strong>{date}</strong></p>
          <p>Quantidade: <strong>{quantity}</strong></p>
        </div>


        <div className="buttons-delete">
          <button><Link to="/salesman/edit/product"> Editar Produto <RiEditFill /></Link></button>
          <button>Deletar Todos <RiDeleteBinLine color={"red"} /></button>
          <button>Deletar um <RiDeleteBinLine color={"red"} /></button>
        </div>


      </section>

    </Main>

  </>;
}

export default ListProduct;
