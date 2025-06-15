import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'white',
  color: '$softBlack',
})

export const MainContent = styled('main', {
  flex: 1,
  padding: '1rem',
})
