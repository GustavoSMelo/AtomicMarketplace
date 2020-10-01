import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import { RiShoppingCartLine, RiDeleteBinLine } from 'react-icons/ri'
import { Container } from './styled'
import ListProduct from '../../components/ListProduct'
import ProductInterface from '../../interfaces/ProductInterface'
import api from '../../api'
import PopupCard from '../../components/popupStatusCard'

const DeleteProduct: React.FC = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [status, setStatus] = useState(<></>)

  const deleteProductMethod = async id => {
    try {
      const response = await api.delete('/products', { headers: {
        searchid: id,
        authorization: `Bearer ${localStorage.getItem('token')}`
      }})

      if (response.status === 200) {
        products.filter(product => product.id === id)
      }

      setStatus(<PopupCard backgroundcolor='#51B556' textcolor='#295C2C' content='product deleted with success' />)
    } catch (err) {
      setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Error to delete product, try again ' />)
    }
  }

  const getDataByAPI = async () => {
    const response = await api.get<ProductInterface[]>('/products', {
      headers: {
        salesman_id: localStorage.getItem('salesmanid')
      }
    })

    setProducts(response.data)
  }

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 3000)
  }, [status])

  useEffect(() => {
    getDataByAPI()
  }, [products])

  return (
    <>
      <Navbar />
      <Container>
        <h2>Quais Produtos deseja deletar?</h2>
        <h4> <RiShoppingCartLine size={18} /> Histórico de produtos </h4>
        {products.map(product => <ListProduct
          key={product.id}
          image={`http://localhost:3333/uploads/${product.product_image}`}
          nameProduct={product.product_name}
          date={String(product.created_at)}
          quantity={product.amount}
          onClickFunction={() => deleteProductMethod(product.id)}/>)}
      </Container>
      {status}
    </>
  )
}

export default DeleteProduct
