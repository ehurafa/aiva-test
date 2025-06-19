import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'

jest.mock('./Header', () => ({
  Header: () => <header>Mock Header</header>,
}))

jest.mock('./Footer', () => ({
  Footer: () => <footer>Mock Footer</footer>,
}))

describe('Layout Component', () => {
  it('renders the Header, Footer, and Outlet components', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )

    const header = screen.getByText('Mock Header')
    const footer = screen.getByText('Mock Footer')
    const main = screen.getByRole('main')

    expect(header).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
    expect(main).toBeInTheDocument()
  })
})
