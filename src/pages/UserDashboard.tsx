import React from "react"
import { useUserStore } from "../store/userStore"
import { useCartAndFavoritesStore } from "../store/useCartAndFavoritesStore"
import {
  DashboardContainer,
  UserInfo,
  UserDetails,
  Avatar,
  FavoritesContainer,
  ProductCard,
} from "./UserDashboard.styles"
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export const UserDashboard: React.FC = () => {
  const { user } = useUserStore();
  const { favorites } = useCartAndFavoritesStore();

  if (!user) {
    return <p>Você precisa estar logado para acessar esta página.</p>;
  }

  return (
    <>
    <Header />
    <DashboardContainer>
      <UserInfo>
        <Avatar src={user.avatar} alt={`${user.name}'s avatar`} />
        <UserDetails>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </UserDetails>
      </UserInfo>

      <FavoritesContainer>
        <h3>Produtos Favoritos</h3>
        {favorites.length > 0 ? (
          <div>
            {favorites.map((product) => (
              <ProductCard key={product.id}>
                <img src={product.images[0]} alt={product.title} />
                <div>
                  <h4>{product.title}</h4>
                  <p>R$ {product.price.toFixed(2)}</p>
                </div>
              </ProductCard>
            ))}
          </div>
        ) : (
          <p>Você ainda não possui produtos favoritos.</p>
        )}
      </FavoritesContainer>
    </DashboardContainer>
    <Footer />
    </>
  )
}
