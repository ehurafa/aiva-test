import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './routes/AppRouter'
import { globalStyles } from './styles/stitches.config'

globalStyles()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
