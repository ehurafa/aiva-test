import type { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Grid, Detail, CategoryHeader } from './Content.styles'

export const Content: FC = () => {
  const location = useLocation()

  if (location.pathname === '/detalhes') {
    return (
      <Container>
        <Detail>
          <h1>Detalhes do Produto</h1>
        </Detail>
      </Container>
    )
  }

  if (location.pathname.startsWith('/categoria')) {
    return (
      <Container>
        <CategoryHeader>
          <h1>Categoria: Nome da Categoria</h1>
        </CategoryHeader>
        <Grid>
           produtos
        </Grid>
      </Container>
    )
  }

  return (
    <Container>
      <Grid>
       produtos
      </Grid>
    </Container>
  )
}
