import { styled } from '@stitches/react';
import { theme } from '../../styles/stitches.config.ts';

export const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  height: '64px',
  backgroundColor: theme.colors.darkGray,
  color: theme.colors.lightGray,
});

export const Logo = styled('div', {
  fontSize: '24px',
  fontWeight: 'bold',
  color: theme.colors.neonGreen,
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
});
