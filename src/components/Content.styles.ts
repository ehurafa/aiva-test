import { styled } from '@stitches/react'
import { theme } from '../styles/stitches.config'

export const Container = styled('main', {
  padding: '16px',
  backgroundColor: theme.colors.lightGray,

  '@media (max-width: 768px)': {
    padding: '8px',
  },
})

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
})

export const Detail = styled('div', {
  padding: '16px',
  backgroundColor: theme.colors.softBlack,
  color: theme.colors.lightGray,
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',

  h1: {
    marginBottom: '8px',
    color: theme.colors.neonGreen,
  },
})

export const CategoryHeader = styled('div', {
  marginBottom: '16px',
  h1: {
    color: theme.colors.darkGray,
  },
})
