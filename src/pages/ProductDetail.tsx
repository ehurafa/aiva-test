import type { FC } from 'react'
import { useParams } from "react-router-dom";

export const ProductDetail: FC = () => {
  const { productId } = useParams();
  return <div>🛍️ Detalhes do Produto: {productId}</div>;
}
