import { styled, theme } from '../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  gap: '2rem',

  '@media(min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export const Image = styled('img', {
  width: '100%',
  maxWidth: '400px',
  borderRadius: '8px',
  boxShadow: theme.colors.lightGray,
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const Title = styled('h1', {
  fontSize: '2rem',
  margin: 0,
})

export const Price = styled('p', {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: theme.colors.purpleHighlight,
})

export const Description = styled('p', {
  lineHeight: 1.6,
})

export const Button = styled('button', {
  padding: '0.75rem 1.5rem',
  fontSize: '0.8rem',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',

  '&:hover': {
    color: theme.colors.purpleHighlight,
  },

  '&:active': {
    color: theme.colors.purpleHighlight,
  },
})
