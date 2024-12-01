import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from './components/Custom/Body.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body/>
  </StrictMode>,
)