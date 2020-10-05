import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import { RiImageAddLine } from 'react-icons/ri'
import { Container } from './styled'
import PopupCard from '../../components/popupStatusCard'
import api from '../../api'

const CreateProduct: React.FC = () => {
  const [product_image, setProduct_image] = useState(null)
  const [product_name, setProduct_name] = useState('')
  const [kind_prod, setKind_prod] = useState('')
  const [amount, setAmount] = useState(0)
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState(<></>)

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 5000)
  }, [status])

  const handleImageChange = e => {
    console.log(e.target.files[0])
    setProduct_image(e.target.files[0])
    console.log(product_image)
  }

  const handleRegistryProduct = async () => {
    try {
      const fd = new FormData()
      fd.append('product_image', product_image)
      fd.append('product_name', product_name)
      fd.append('kind_prod', kind_prod)
      fd.append('amount', String(amount))
      fd.append('brand', brand)
      fd.append('product_price', String(price))
      fd.append('description', description)
      await api.post('/products', fd, {
        headers: {
          salesman_id: localStorage.getItem('salesmanid'),
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      return setStatus(<PopupCard backgroundcolor='#51B556' textcolor='#295C2C' content='Produto criado com sucesso'/>)
    } catch (err) {
      setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Erro ao criar um novo produto, verifique os campos e espere a imagem carregar, e tente novamente'/>)
    }
  }

  return (
    <>
      <Container>
        <h3>Bem vindo Mateus, crie seu produto</h3>
        <form>
          <input type="file" name="upload" id="upload" accept="image/*" className="dropzone" onChange={e => handleImageChange(e)} />
          <label htmlFor="upload"><RiImageAddLine fontSize={20} className="upload-image" /> Imagens do produto</label>
          <div className="input-group">
            <Input value={product_name} onTextChanged={setProduct_name} type="text" placeholder="Nome do Produto" />
            <Input onTextChanged={setPrice} type="number" placeholder="Preço do Produto" min="0" />
            <br />
            <select value={kind_prod}
              name="categorias"
              onChange={e => setKind_prod(e.target.value)}
              className="categorias">
              <option>Selecione uma categoria</option>
              <option value="Roupa casuais">Roupa casuais</option>
              <option value="Roupa esportiva" >Roupa esportiva</option>
              <option value="Sapato social feminino">Sapato social feminino</option>
              <option value="Sapato esportivo">Sapato esportivo</option>
              <option value="Sapato social">Sapato social</option>
              <option value="Vestidos">Vestidos</option>
              <option value="Roupa sociais">Roupa sociais</option>
              <option value="Sapato casuais">Sapato casuais</option>
            </select>
            <Input onTextChanged={setAmount} type="number" placeholder="Quantidade" min="0" />
            <br />
            <Input value={brand} onTextChanged={setBrand} type="text" placeholder="Marca" min="0" />
          </div>
          <h3>Descrição do Produto</h3>
          <textarea value={description} onChange={e => setDescription(e.target.value)} name="descricao" id="descricao" className="descricao" ></textarea>
          <Button type="button" value="Criar Produto" onClickFunction={() => handleRegistryProduct()}/>
        </form>
      </Container>
      {status}
    </>
  )
}

export default CreateProduct
