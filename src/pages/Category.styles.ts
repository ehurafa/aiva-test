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

export const ProductCard = styled('div', {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  textAlign: 'center',

  img: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },

  h3: {
    margin: '0.5rem 0',
    fontSize: '1.2rem',
  },

  p: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
