import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Login from '../../views/login'
import Input from '../../components/input'

describe('Render about login user page', () => {
  it('Layout should have a form and inside of this form should have a input for email, input for password, button and link to create a new account', () => {
    const { getByTestId, getAllByTestId } = render(<BrowserRouter><Login /></BrowserRouter>)
    expect(getAllByTestId('input-component')).toHaveLength(2)
    expect(getByTestId('form')).toContainElement(getByTestId('login-button'))
    expect(getByTestId('form')).toContainElement(getByTestId('registry-button'))
  })
})
