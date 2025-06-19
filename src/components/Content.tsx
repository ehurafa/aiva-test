import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Grid, Detail, CategoryHeader } from './Content.styles'

interface ContentProps {
  className?: string
  children?: ReactNode
}

export const Content: React.FC<ContentProps> = ({ className, children }) => {
  const location = useLocation()

  if (location.pathname === '/detalhes') {
    return (
      <Container className={className}>
        <Detail>
          <h1>Detalhes do Produto</h1>
        </Detail>
      </Container>
    )
  }

  if (location.pathname.startsWith('/categoria')) {
    return (
      <Container className={className}>
        <CategoryHeader>
          <h1>Categoria: Nome da Categoria</h1>
        </CategoryHeader>
        <Grid>produtos</Grid>
      </Container>
    )
  }

  return (
    <Container className={className} data-testid="content-container">
      <Grid>{children || 'produtos'}</Grid>
    </Container>
  )
}
