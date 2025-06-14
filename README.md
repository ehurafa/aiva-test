## Fluxograma
```mermaid
graph TD
  Start(Início do app) --> Home(Home Page)
  Home --> Login(Login/Register)
  Home --> Category(Página de Categoria)
  Category --> ProductDetail(Detalhes do Produto)
  ProductDetail --> AddCart(Adicionar ao Carrinho)
  AddCart --> Cart(Visualizar Carrinho)

  Login --> AdminCheck{Admin?}
  AdminCheck -->|Sim| AdminDashboard(Admin Dashboard)
  AdminDashboard --> CRUD(CRUD de Produtos)

  Cart --> Checkout(Checkout - futuro)

  Home --> Search(Busca de Produtos)
  Search --> ProductDetail

  subgraph Fluxos
    Home
    Login
    Category
    ProductDetail
    Cart
    AdminDashboard
    CRUD
    Checkout
  end

```
