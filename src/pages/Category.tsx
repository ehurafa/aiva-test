import type { FC } from 'react'
import { useParams } from "react-router-dom";

export const Category: FC = () => {
  const { categoryId } = useParams();
  return <div>📂 Página da Categoria: {categoryId}</div>;
}
