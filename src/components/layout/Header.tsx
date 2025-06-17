import { FC, useState  } from 'react'
import { HeaderContainer, Logo, SearchInput, NavIcons, NavMenu, NavLink, HamburgerButton, MobileMenu, MenuWrapper, HeaderContent } from './Header.styles';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

export const Header: FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Aiva Shop</Logo>
        <SearchInput type="text" placeholder="Buscar produtos..." />      
      </HeaderContent>      

      <MenuWrapper>
        <NavMenu>
          <NavLink href="/categoria/clothes">Clothes</NavLink>
          <NavLink href="/categoria/electronics">Electronics</NavLink>
          <NavLink href="/categoria/figura">Figura</NavLink>
          <NavLink href="/categoria/miscellaneous">Miscellaneous</NavLink>
          <NavLink href="/categoria/shoes">Shoes</NavLink>
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
