import React from 'react'
import './styles/style.scss'

import { createRoot } from 'react-dom/client'
import Routing from './components/Routing'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>  
)

