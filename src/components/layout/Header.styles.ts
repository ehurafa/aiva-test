import { styled } from '@stitches/react';
import { theme } from '../../styles/stitches.config'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '8px',
  backgroundColor: theme.colors.darkGray,
  color: theme.colors.lightGray,
  flexWrap: 'wrap',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    height: 'auto',
    padding: '8px',
  },
});

export const HeaderContent = styled('div', {
  width: '100%',
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center' 
});

export const MenuWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  padding: '12px 0 4px 0',
  justifyContent: 'space-between',
});

export const NavMenu = styled('nav', {
  width: '100%',
  gap: '3rem',
  justifyContent: 'center',
  display: 'flex',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '0.5rem',
    marginLeft: '0',
    display: 'none'
  },
});

export const NavLink = styled('a', {
  textDecoration: 'none',
  color: theme.colors.lightGray,
  fontWeight: 'bold',
  '&:hover': {
    color: theme.colors.neonGreen,
  },

  '@media (max-width: 768px)': {
    fontSize: '0.9rem',
  },
});

export const HamburgerButton = styled('button', {
  display: 'none',
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: theme.colors.lightGray,

  '@media (max-width: 768px)': {
    display: 'block',
  },
});

export const Logo = styled('a', {
  fontSize: '24px',
  fontWeight: 'bold',
  color: theme.colors.neonGreen,
  marginBottom: '8px',
  textDecoration: 'none',

  '@media (min-width: 768px)': {
    marginBottom: '0',
  },
});

export const SearchInput = styled('input', {
  flex: 1,
  marginLeft: '16px',
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

  '@media (max-width: 768px)': {
    justifyContent: 'center',
    gap: '12px',
  },
});

export const NavIconsCounter = styled('span', {
 fontSize: '11px'
});