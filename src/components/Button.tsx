import React from 'react'
import { StyledButton } from './Button.styles'
import { Link } from 'react-router-dom'

type ButtonProps = {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary';
  state?: 'active';
  mode: 'button' | 'link';
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  'data-testid'?: string;
};

export const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  state,
  mode,
  to,
  onClick,
  children,
  'data-testid': testId,
}) => {
  if (mode === 'link' && to) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }} data-testid={testId}>
        <StyledButton size={size} variant={variant} state={state}>
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton
      size={size}
      variant={variant}
      state={state}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </StyledButton>
  )
}
