import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Cart from '../../views/cart'

describe('Render layout about cart page', () => {
  it('This layout should have two returns, one will render if not have product in list, and other need to return when you have products in list ', () => {
    const { getByTestId } = render(<BrowserRouter><Cart /></BrowserRouter>)
    expect(getByTestId('Container')).toContainElement(getByTestId('without-product'))
    expect(getByTestId('Container')).toContainElement(getByTestId('with-product'))
  })
})

describe('Render tag with testid-data= without-product', () => {
  it('This layout should return only image and title with text=Você não tem produtos na sacola ainda ;-;', async () => {
    const { getByTestId, findByText } = render(<BrowserRouter><Cart /></BrowserRouter>)
    expect(getByTestId('without-product')).toContainElement(getByTestId('image-alert'))
    expect(getByTestId('without-product')).toContainElement(await findByText('Você não tem produtos na sacola ainda ;-;'))
    expect(getByTestId('without-product')).toContainElement(await findByText('Navegue na nossa loja para encontrar produtos'))
    expect(getByTestId('without-product')).toContainElement(await getByTestId('btn-navigate'))
  })
})

describe('Render tag with testid-data= with-product', () => {
  it('This layout should return one list with products inside the bag', () => {
    const { getByTestId } = render(<BrowserRouter><Cart /></BrowserRouter>)
    expect(getByTestId('with-product')).toContainElement(getByTestId('list'))
  })
})
