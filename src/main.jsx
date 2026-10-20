import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './polish.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.12 })
const scan = () => document.querySelectorAll('.card,.highlight-card,.stats div,.skill-card,.service-card,.timeline li,.projects-heading').forEach((el) => { if (!el.dataset.r) { el.dataset.r = 1; el.classList.add('reveal'); io.observe(el) } })
new MutationObserver(scan).observe(document.body, { childList: true, subtree: true })
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
