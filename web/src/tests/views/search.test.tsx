import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Search from '../../views/search'

describe('Test render about page Search ', () => {
  it('The layout should have a input to type a name of product\nButton to search product in database\nand one list', () => {
    const { getByTestId } = render(<BrowserRouter><Search /></BrowserRouter>)
    expect(getByTestId('container')).toContainElement(getByTestId('input-component'))
    expect(getByTestId('container')).toContainElement(getByTestId('search-button'))
    expect(getByTestId('container')).toContainElement(getByTestId('list'))
  })
})
