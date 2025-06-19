import { styled } from '@stitches/react'
import { theme } from '../../styles/stitches.config'

export const Container = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  backgroundColor: theme.colors.darkGray,
  color: theme.colors.lightGray,
  textAlign: 'center',

  '@media (max-width: 768px)': {
    padding: '12px',
  },
})

export const Copyright = styled('div', {
  fontSize: '14px',
  color: theme.colors.lightGray,

  '@media (max-width: 768px)': {
    fontSize: '12px',
  },
})
