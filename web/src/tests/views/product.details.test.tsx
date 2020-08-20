import React from 'react'
import { render } from '@testing-library/react'
import ProductDetails from '../../views/productDetails'
import { BrowserRouter } from 'react-router-dom'

describe('Render about product details', () => {
  it('Layout should have a photo of product, name, description, amount, price, brand , commentaries, rating, button to put in cart and button to favorite', () => {
    const { getByTestId } = render(<BrowserRouter><ProductDetails /></BrowserRouter>)
    expect(getByTestId('product')).toContainElement(getByTestId('photo'))
    expect(getByTestId('product')).toContainElement(getByTestId('description'))
    expect(getByTestId('product')).toContainElement(getByTestId('name'))
    expect(getByTestId('product')).toContainElement(getByTestId('price'))
    expect(getByTestId('product')).toContainElement(getByTestId('commentaries'))
    expect(getByTestId('product')).toContainElement(getByTestId('amount'))
    expect(getByTestId('product')).toContainElement(getByTestId('rating-product'))
    expect(getByTestId('product')).toContainElement(getByTestId('cart'))
    expect(getByTestId('product')).toContainElement(getByTestId('favorite'))
  })
})

describe('Render commentaries about product', () => {
  it('Commentaries should have a photo of user, name of user, commentary and rating', () => {
    const { getByTestId } = render(<BrowserRouter><ProductDetails /></BrowserRouter>)
    expect(getByTestId('commentaries')).toContainElement(getByTestId('nameUser'))
    expect(getByTestId('commentaries')).toContainElement(getByTestId('commentary'))
    expect(getByTestId('commentaries')).toContainElement(getByTestId('rating-commentary'))
  })
})
