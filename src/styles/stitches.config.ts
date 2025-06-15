import { createStitches } from '@stitches/react'

export const { styled, css, theme, globalCss } = createStitches({
  theme: {
    colors: {
      neonGreen: '#AEFF00',
      darkGray: '#333333',
      softBlack: '#222222',
      lightGray: '#E6E9EC',
      purpleHighlight: '#820AD1CC',
    },
    fonts: {
      primary: 'Inter, sans-serif',
    },
  },
})

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    fontFamily: '$primary',
    backgroundColor: 'white',
    color: '$softBlack',
  },
})
