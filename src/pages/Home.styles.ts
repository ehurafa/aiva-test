import { styled, theme } from '../styles/stitches.config'

export const Container = styled('div', {
  padding: '16px',
});

export const BannerSection = styled('section', {
  marginBottom: '32px',
});

export const BannerItem = styled('div', {
  width: '300px',
  height: '150px',
  background: theme.colors.purpleHighlight,
  color: theme.colors.lightGray,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  flexShrink: 0,
});

export const SectionTitle = styled('h2', {
  color: theme.colors.softBlack,
});

export const ProductsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '10px',
  marginTop: '8px',
});

export const ProductError = styled('p', {
  color: theme.colors.error
});

