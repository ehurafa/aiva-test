import { styled, theme } from '../styles/stitches.config'

export const LoginPage = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: theme.colors.lightGray,
  fontFamily: "'Arial', sans-serif",
});

export const LoginTitle = styled("h1", {
  fontSize: "2rem",
  color: theme.colors.darkGray,
  marginBottom: "1.5rem",
});

export const LoginForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "400px",
  marginBottom: '20px',
});

export const FormGroup = styled("div", {
  marginBottom: "1rem",
});

export const Label = styled("label", {
  fontSize: "0.9rem",
  color: theme.colors.darkGray,
  marginBottom: "0.5rem",
  display: "block",
});

export const Input = styled("input", {
  width: "100%",
  padding: "0.75rem",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "1rem",
  transition: "border-color 0.3s",

  "&:focus": {
    borderColor: theme.colors.neonGreen,
    outline: "none",
  },
});

export const Button = styled("button", {
  padding: "0.75rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s",
});
