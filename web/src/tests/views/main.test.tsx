import React from 'react'
import { render, } from '@testing-library/react'
import Main from '../../views/main'
import { BrowserRouter } from 'react-router-dom'

test('The list of product need contain products', () => {
  const { getByTestId } = render(<BrowserRouter><Main /></BrowserRouter>)
  expect(getByTestId('product-list')).toContainElement(getByTestId('product'))
})
