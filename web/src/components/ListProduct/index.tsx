import React, { useState, useEffect } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { RiEditFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Main } from './styled'
import api from '../../api'
import PopupCard from '../popupStatusCard'

interface listProductProps {
  image: string;
  nameProduct: string;
  date: string;
  quantity: number;
  onClickFunction?: Function;
}

const ListProduct: React.FC<listProductProps> = ({ image, nameProduct, date, quantity, onClickFunction }) => {
  const [status, setStatus] = useState(<></>)

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 3000)
  }, [status])

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
          <button onClick={() => onClickFunction()}>Deletar <RiDeleteBinLine color='#f00' /></button>
        </div>
      </section>
    </Main>
    {status}
  </>
}

export default ListProduct
