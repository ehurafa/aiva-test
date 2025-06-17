// Home.styles.ts (estilos com Stitches)
import { styled } from '../styles/stitches.config';

export const Container = styled('div', {
  padding: '16px',
});

export const BannerSection = styled('section', {
  marginBottom: '32px',
});

export const BannerItem = styled('div', {
  width: '300px',
  height: '150px',
  background: '$purpleHighlight',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  flexShrink: 0,
});

export const SectionTitle = styled('h2', {
  color: '$softBlack',
});

export const ProductsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '10px',
  marginTop: '8px',
});

export const ProductCard = styled('div', {
  border: '1px solid $lightGray',
  padding: '6px',
  borderRadius: '16px',
  background: '$white',
});

export const ProductImage = styled('img', {
  width: '100%',
  height: '120px',
  objectFit: 'cover',
  borderRadius: '12px',
});

export const ProductTitle = styled('h4', {
  color: '$darkGray',
  fontSize: '16px',
  marginTop: '4px',
});

export const ProductPrice = styled('p', {
  color: '$neonGreen',
  fontWeight: 'bold',
});
