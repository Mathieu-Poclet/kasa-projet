import React from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './components/Routing'
import './styles/style.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>  
)

