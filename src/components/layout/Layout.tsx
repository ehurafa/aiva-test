import { Container, MainContent } from './Layout.styles.ts'
import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  )
}
