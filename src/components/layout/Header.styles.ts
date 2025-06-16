import { styled } from '@stitches/react';
import { theme } from '../../styles/stitches.config'

export const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  height: '64px',
  backgroundColor: theme.colors.darkGray,
  color: theme.colors.lightGray,
  flexWrap: 'wrap',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    height: 'auto',
    padding: '8px',
  },
});

export const Logo = styled('div', {
  fontSize: '24px',
  fontWeight: 'bold',
  color: theme.colors.neonGreen,
  marginBottom: '8px',

  '@media (min-width: 768px)': {
    marginBottom: '0',
  },
});

export const SearchInput = styled('input', {
  flex: 1,
  margin: '0 16px',
  padding: '8px',
  border: `1px solid ${theme.colors.lightGray}`,
  borderRadius: '4px',
  backgroundColor: theme.colors.lightGray,
  color: theme.colors.softBlack,
  fontSize: '16px',

  '&::placeholder': {
    color: theme.colors.purpleHighlight,
  },

  '@media (max-width: 768px)': {
    margin: '8px 0',
    width: '100%',
  },
});

export const NavIcons = styled('div', {
  display: 'flex',
  gap: '16px',
  '> svg': {
    cursor: 'pointer',
    color: theme.colors.lightGray,
    '&:hover': {
      color: theme.colors.neonGreen,
    },
  },

  '@media (max-width: 768px)': {
    justifyContent: 'center',
    width: '100%',
    gap: '12px',
  },
});
