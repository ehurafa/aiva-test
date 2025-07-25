import React, { useState } from 'react'
import {
  HeaderContainer,
  Logo,
  SearchInput,
  NavIcons,
  NavMenu,
  NavLink,
  HamburgerButton,
  MenuWrapper,
  HeaderContent,
  NavIconsCounter,
  HeaderUser,
} from './Header.styles'
import { useCartAndFavoritesStore } from '../../store/useCartAndFavoritesStore'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useUserStore } from '../../store/userStore'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const Header: React.FC = () => {
  const { user, logout } = useUserStore()
  const { cart } = useCartAndFavoritesStore()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/">Aiva Shop</Logo>
        <SearchInput type="text" placeholder="Buscar produtos..." />
      </HeaderContent>

      <MenuWrapper>
        <NavMenu>
          <NavLink href="/category/1" data-testid="category-link">Clothes</NavLink>
          <NavLink href="/category/2">Electronics</NavLink>
          <NavLink href="/category/4">Shoes</NavLink>
          <NavLink href="/category/5">Miscellaneous</NavLink>
          <NavLink href="/category/22">Figura</NavLink>
        </NavMenu>

        <NavIcons>
          <FaShoppingCart title="Carrinho" size={20} />{' '}
          <NavIconsCounter>{cart.length}</NavIconsCounter>
          <Link to="/dashboard">
            <FaUser title="Minha Conta" size={20} />
          </Link>
        </NavIcons>

        <HeaderUser>
          {user ? (
            <>
              <span>Olá, {user.name}!</span>
              <Button
                variant="secondary"
                size="small"
                mode="button"
                onClick={logout}
              >Sair</Button>
            </>
          ) : (
            
            <Button variant="secondary" size="small" mode="link">
              <a href="/login">Login</a>
            </Button>
          )}
        </HeaderUser>

        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </HamburgerButton>
      </MenuWrapper>
    </HeaderContainer>
  )
}
