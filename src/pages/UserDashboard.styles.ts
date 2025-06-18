import { styled, theme } from '../styles/stitches.config'

export const DashboardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
  backgroundColor: theme.colors.lightGray,
  minHeight: "100vh",
});

export const UserInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1.5rem",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  marginBottom: "2rem",
  width: "100%",
  maxWidth: "600px",
});

export const Avatar = styled("img", {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  borderColor: theme.colors.darkGray,
  borderWidth: '1px',
  borderStyle: 'solid',
});

export const UserDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h2: {
    margin: 0,
    fontSize: "1.5rem",
    color: theme.colors.darkGray,
  },

  p: {
    margin: 0,
    fontSize: "1rem",
    color: theme.colors.darkGray,
  },
});

export const FavoritesContainer = styled("div", {
  width: "100%",
  maxWidth: "600px",

  h3: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },

  div: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
  },
});

export const ProductCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  textAlign: "center",

  img: {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
    marginBottom: "0.5rem",
  },

  h4: {
    margin: "0 0 0.5rem",
    fontSize: "1rem",
    color: "#333",
  },

  p: {
    margin: 0,
    fontSize: "0.9rem",
  },
});
