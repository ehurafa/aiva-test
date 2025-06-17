import { FC, useState  } from 'react'
import { HeaderContainer, Logo, SearchInput, NavIcons, NavMenu, NavLink, HamburgerButton, MenuWrapper, HeaderContent } from './Header.styles';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

export const Header: FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/">Aiva Shop</Logo>
        <SearchInput type="text" placeholder="Buscar produtos..." />      
      </HeaderContent>      

      <MenuWrapper>
        <NavMenu>
          <NavLink href="/categoria/1">Clothes</NavLink>
          <NavLink href="/categoria/2">Electronics</NavLink>
          <NavLink href="/categoria/4">Shoes</NavLink>
          <NavLink href="/categoria/5">Miscellaneous</NavLink>
          <NavLink href="/categoria/22">Figura</NavLink>
        </NavMenu>

         <NavIcons>
          <FaHeart title="Favoritos" size={20} />
          <FaShoppingCart title="Carrinho" size={20} />
          <FaUser title="Minha Conta" size={20} />
        </NavIcons>

        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </HamburgerButton>
      </MenuWrapper>

    </HeaderContainer>
  )
}
