import { Container, MainContent } from './Layout.styles.ts'
import { Header } from './Header'
import { Content } from '../Content'
import { Footer } from './Footer'


export const Layout = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <Content />
      </MainContent>
      <Footer />
    </Container>
  )
}
