import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri'
import { Main } from './styled';

const ListProduct: React.FC = () => {
  return <>
    <Main>
      <section>

        <div className="image-product">
          imagem do produto
            </div>

        <div className="data-product">
          <p>Nome do Produto: <strong>Air Jordan Nike</strong></p>
          <p className="date-product">Adicionado em: <strong>14/11/2020</strong></p>
          <p>Quantidade: <strong>50</strong></p>
        </div>


        <div className="buttons-delete">
          <button>Deletar Todos <RiDeleteBinLine color={"red"} /></button>
          <button>Deletar um <RiDeleteBinLine color={"red"} /></button>
        </div>


      </section>

    </Main>

  </>;
}

export default ListProduct;
