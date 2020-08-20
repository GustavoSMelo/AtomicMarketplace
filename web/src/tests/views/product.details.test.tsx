import React from 'react'
import { render } from '@testing-library/react'
import ProductDetails from '../../views/productDetails'
import { BrowserRouter } from 'react-router-dom'

describe('Render about product details', () => {
  it('Layout should have a photo of product, name, description, amount, price, brand , commentaries, rating, button to put in cart and button to favorite', () => {
    const { getByTestId } = render(<BrowserRouter><ProductDetails /></BrowserRouter>)
    expect(getByTestId('product')).toContainElement('photo')
    expect(getByTestId('product')).toContainElement('description')
    expect(getByTestId('product')).toContainElement('name')
    expect(getByTestId('product')).toContainElement('price')
    expect(getByTestId('product')).toContainElement('brand')
    expect(getByTestId('product')).toContainElement('commentaries')
    expect(getByTestId('product')).toContainElement('rating')
    expect(getByTestId('product')).toContainElement('cart')
    expect(getByTestId('product')).toContainElement('favorite')
  })
})

describe('Render commentaries about product', () => {
  it('Commentaries should have a photo of user, name of user, commentary and rating', () => {
    const { getByTestId } = render(<BrowserRouter><ProductDetails /></BrowserRouter>)
    expect(getByTestId('commentaries')).toContainElement('nameUser')
    expect(getByTestId('commentaries')).toContainElement('commentary')
    expect(getByTestId('commentaries')).toContainElement('rating')
  })
})
