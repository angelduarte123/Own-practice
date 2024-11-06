import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstComponent } from './FirstComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstComponent />
  </StrictMode>,
)
