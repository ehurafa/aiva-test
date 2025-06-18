import React, { useState  } from 'react'
import { HeaderContainer, Logo, SearchInput, NavIcons, NavMenu, NavLink, HamburgerButton, MenuWrapper, HeaderContent, NavIconsCounter } from './Header.styles'
import { useCartAndFavoritesStore } from '../../store/useCartAndFavoritesStore'
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'

export const Header: React.FC = () => {

  const { cart } = useCartAndFavoritesStore()

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/">Aiva Shop</Logo>
        <SearchInput type="text" placeholder="Buscar produtos..." />      
      </HeaderContent>      

      <MenuWrapper>
        <NavMenu>
          <NavLink href="/category/1">Clothes</NavLink>
          <NavLink href="/category/2">Electronics</NavLink>
          <NavLink href="/category/4">Shoes</NavLink>
          <NavLink href="/category/5">Miscellaneous</NavLink>
          <NavLink href="/category/22">Figura</NavLink>
        </NavMenu>

         <NavIcons>
          <FaHeart title="Favoritos" size={20} />
          <FaShoppingCart title="Carrinho" size={20} /> <NavIconsCounter>{cart.length}</NavIconsCounter>
          <FaUser title="Minha Conta" size={20} />
        </NavIcons>

        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </HamburgerButton>
      </MenuWrapper>

    </HeaderContainer>
  )
}
