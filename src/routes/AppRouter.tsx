import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout"
import { Home } from "../pages/Home"
import { Category } from "../pages/Category"
import { ProductDetails } from "../pages/ProductDetails"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:categoryId" element={<Category />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
