import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import Context from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Context>
)
