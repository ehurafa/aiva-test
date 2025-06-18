import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Content } from './Content'

describe('Content Component', () => {
  it('renders the children correctly', () => {
    const childText = 'Hello, world!'
    render(
      <MemoryRouter>
        <Content>
          <p>{childText}</p>
        </Content>
      </MemoryRouter>
    )

    expect(screen.getByText(childText)).toBeInTheDocument()
  })

  it('applies additional classes when provided', () => {
    const childText = 'Styled content'
    render(
      <MemoryRouter>
        <Content className="extra-class">
          <p>{childText}</p>
        </Content>
      </MemoryRouter>
    )

    const containerElement = screen.getByTestId('content-container')
    expect(containerElement).toHaveClass('extra-class')
  })

  it('renders specific content when pathname is "/detalhes"', () => {
    render(
      <MemoryRouter initialEntries={['/detalhes']}>
        <Routes>
          <Route path="/detalhes" element={<Content />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Detalhes do Produto')).toBeInTheDocument()
  })

  it('renders specific content when pathname is "/categoria"', () => {
    render(
      <MemoryRouter initialEntries={['/categoria']}>
        <Routes>
          <Route path="/categoria" element={<Content />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Categoria: Nome da Categoria')).toBeInTheDocument()
  })
})
