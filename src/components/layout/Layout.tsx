import type { FC } from 'react'
import { Outlet } from "react-router-dom"
import { Container } from './Layout.styles.ts'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: FC = () => {
  return (
    <Container>
      <Header />
      <main style={{ minHeight: "80vh", padding: "1rem" }}>
        <Outlet />
      </main>
      <Footer />
    </Container>
  )
}
