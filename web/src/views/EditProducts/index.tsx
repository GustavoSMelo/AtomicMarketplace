import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import Input from '../../components/input'
import Button from '../../components/button'
import { Container } from './styled'
import { RouteComponentProps } from 'react-router-dom'
import api from '../../api'
import ProductInterface from '../../interfaces/ProductInterface'
import PopupCard from '../../components/popupStatusCard'

const EditProducts: React.FC<RouteComponentProps> = ({ match }) => {
  const [product_name, setProduct_name] = useState('')
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState('')
  const [product_price, setProduct_price] = useState(0)
  const [kind_prod, setKind_prod] = useState('')
  const [brand, setBrand] = useState('')
  const [product_image, setProduct_image] = useState(null)
  const [status, setStatus] = useState(<></>)

  const getDataByAPI = async () => {
    const { id } = match.params as any
    const response = await api.get<ProductInterface>('/products/show/only', {
      headers: {
        id
      }
    })

    setProduct_name(response.data.product_name)
    setProduct_price(response.data.product_price)
    setKind_prod(response.data.kind_prod)
    setAmount(response.data.amount)
    setDescription(response.data.description)
    setBrand(response.data.brand)
  }

  const handleEditProduct = async () => {
    try {
      const fd = new FormData()
      fd.append('product_name', product_name)
      fd.append('product_price', String(product_price))
      fd.append('kind_prod', kind_prod)
      fd.append('amount', String(amount))
      fd.append('description', description)
      fd.append('brand', brand)

      if (product_image !== null) {
        fd.append('product_image', product_image)
      }

      const { id } = match.params as any

      await api.put('/products', fd, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          searchid: id
        }
      })

      setStatus(<PopupCard backgroundcolor='#51B556' textcolor='#295C2C' content='Produto editado com sucesso'/>)
    } catch (err) {
      setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Falha ao editar produto, verifique os campos e tente novamente'/>)
    }
  }

  const handleImageChange = e => {
    setProduct_image(e.target.files[0])
  }

  useEffect(() => {
    getDataByAPI()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 3000)
  }, [status])

  return <>
    <Navbar />
    <Container>
      <h3>Bem vindo a edição de Produto</h3>
      <small>Caso precise alterar apenas um campo, apenas altere o mesmo, não á necessidade de escrever tudo novamente :) </small>

      <form>
        <span>
          <label>Nome: </label>
          <Input onTextChanged={setProduct_name} value={product_name} type="text" placeholder="Nome do Produto" />
        </span>
        <span>
          <label>Qntd: </label>
          <Input onTextChanged={setAmount} value={amount} type="number" placeholder="Aumentar o diminuir quantidade" />
        </span>
        <span>
          <label>Preço: </label>
          <Input onTextChanged={setProduct_price} value={product_price} type="number" placeholder="Preço do produto" />
        </span>
        <span>
          <label>Marca: </label>
          <Input onTextChanged={setBrand} value={brand} type="text" placeholder="Marca" />
        </span>
        <span>
          <label>Image: </label>
          <input type="file" name="upload" id="upload" accept="image/*" className="dropzone" onChange={e => handleImageChange(e)} />
        </span>

        <span>
          <label>Categoria: </label>
          <select onChange={e => setKind_prod(e.target.value)} value={kind_prod} name="categorias" className="categorias">
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
        </span>

        <h3>Descrição do Produto</h3>
        <textarea onChange={e => setDescription(e.target.value)} value={description} name="descricao" id="descricao" className="descricao" ></textarea>

        <Button onClickFunction={() => handleEditProduct()} type="button" value="Editar Produto"/>
      </form>
    </Container>
    {status}
  </>
}

export default EditProducts;
