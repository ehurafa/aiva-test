import { Container, Copyright } from './Footer.styles'

export const Footer = () => {
  return (
    <Container>
      <Copyright>
        &copy; {new Date().getFullYear()} Aiva Shop. Todos os direitos reservados.
      </Copyright>
    </Container>
  )
}
