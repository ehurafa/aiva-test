import { styled, theme } from '../styles/stitches.config';


export const Card = styled('div', {
  border: '1px solid',
  borderColor:  theme.colors.lightGray,
  borderRadius: '8px',
  padding: '1rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '16px',
  color: theme.colors.darkGray,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)',
  },
});

export const Image = styled('img', {
  width: '100%',
  maxWidth: '200px',
  height: 'auto',
  objectFit: 'cover',
  marginBottom: '2px',
  borderRadius: '4px',
});

export const Title = styled('h3', {
 fontSize: '1rem',
  fontWeight: 'bold',
  marginBottom: '4px',
  textAlign: 'center',
  padding: '4px'
});

export const Price = styled('p', {
  fontSize: '16px',
  color: theme.colors.purpleHighlight,
  fontWeight: 'bold',
  marginBottom: '8px',
});

export const Actions = styled('div', {
  display: 'flex',
  gap: '4px',
  justifyContent: 'center',
  width: '100%',
});

export const Button = styled('button', {
  padding: '4px 8px',
  borderRadius: '10px',
  fontSize: '10px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  variants: {
    variant: {
      favorite: {
        '&:hover': {
          backgroundColor: theme.colors.neonGreen,
        },
      },
      favoriteActive: {
        backgroundColor: theme.colors.neonGreen,
      },
      cart: {
        '&:hover': {
          backgroundColor: theme.colors.neonGreen,
        },
      },
    },
  },
});
