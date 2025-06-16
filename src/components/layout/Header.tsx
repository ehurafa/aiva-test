import { Container, Logo, SearchInput, NavIcons } from './Header.styles';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

export const Header = () => {
  return (
    <Container>
      <Logo>Aiva Shop</Logo>

      <SearchInput type="text" placeholder="Buscar produtos..." />

      <NavIcons>
        <FaHeart title="Favoritos" size={20} />
        <FaShoppingCart title="Carrinho" size={20} />
        <FaUser title="Minha Conta" size={20} />
      </NavIcons>
    </Container>
  )
}
