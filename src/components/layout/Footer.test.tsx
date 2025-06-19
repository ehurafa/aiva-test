import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer Component', () => {
  it('renders the copyright text', () => {
    render(<Footer />)
    const copyrightText = screen.getByText(
      /© \d{4} Aiva Shop\. Todos os direitos reservados\./
    )
    expect(copyrightText).toBeInTheDocument()
  })
})
