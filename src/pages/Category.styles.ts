import { styled } from '../styles/stitches.config';

export const Container = styled('div', {
  padding: '1rem',
  h1: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
});

export const ProductGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '1rem',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
});
