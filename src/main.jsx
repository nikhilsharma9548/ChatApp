import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextPrivider from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <ContextPrivider>
    <App />
  </ContextPrivider>,
)
