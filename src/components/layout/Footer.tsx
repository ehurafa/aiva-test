import type { FC } from 'react'
import { Container, Copyright } from './Footer.styles'

export const Footer: FC = () => {
  return (
    <Container>
      <Copyright>
        &copy; {new Date().getFullYear()} Aiva Shop. Todos os direitos reservados.
      </Copyright>
    </Container>
  )
}
