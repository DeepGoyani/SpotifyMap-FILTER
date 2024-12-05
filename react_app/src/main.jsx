import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './Components/Sidebar.jsx'
import App from './App.jsx'
import './App.css'
import Content from './Components/Content.jsx'
import Footer from './Components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="main">
    <App />
    <Sidebar />
    <Content/>
    <Footer/>
    </div>
  </StrictMode>
 
)
