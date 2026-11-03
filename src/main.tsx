import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/app.css'
import App from './App.tsx'

createRoot(document.getElementById('___gatsby')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
