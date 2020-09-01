import React from 'react'
import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import { RiImageAddLine } from 'react-icons/ri'

import { Container } from './styled'
const createProduct: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h3>Bem vindo Mateus, crie seu produto</h3>
        <form>
          <input type="file" name="upload" id="upload" accept="image/*" className="dropzone" />
          <label htmlFor="upload"><RiImageAddLine fontSize={20} className="upload-image" /> Imagens do produto</label>
          <div className="input-group">
            <Input type="text" placeholder="Nome do Produto" />
            <Input type="number" placeholder="Preço do Produto" min="0" /> <br />
            <select name="categorias" className="categorias">
              <option value="0">Selecione uma categoria</option>
              <option value="1">Eletrônicos</option>
              <option value="2" >Beleza</option>
            </select>
            <Input type="number" placeholder="Quantidade" min="0" />
          </div>
          <h3>Descrição do Produto</h3>
          <textarea name="descricao" id="descricao" className="descricao" ></textarea>
          <Button type="button" value="Criar Produto" />

        </form>
      </Container>

    </>
  )
}

export default createProduct
