import { styled, theme } from '../styles/stitches.config'

const buttonSizes = {
  small: {
    padding: '4px 6px',
    fontSize: '10px',
    borderRadius: '8px',
    borderWidth: '1px',
  },
  medium: {
    padding: '8px',
    fontSize: '12px',
  },
  large: {
    padding: '10px 20px',
    fontSize: '18px',
    fontWeight: 'bold'
  },
};

export const StyledButton = styled('button', {
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.2s, border-color 0.2s',
  borderWidth: '2px',

  variants: {
    size: {
      small: buttonSizes['small'],
      medium: buttonSizes['medium'],
      large: buttonSizes['large'],
    },
    variant: {
      primary: {
        '&:hover': {
          backgroundColor: theme.colors.neonGreen,
        },
      },
      secondary: {
        backgroundColor: theme.colors.purpleHighlight,
        color: theme.colors.white,

        '&:hover': {
          backgroundColor: theme.colors.darkGray,
        },
      },
    },
    state: {
      active: {
        backgroundColor: theme.colors.neonGreen,
      },
    },
  },
})