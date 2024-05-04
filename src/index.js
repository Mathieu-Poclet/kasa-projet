import React from 'react'
//import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import AppartementPage from './pages/AppartementPage'

import Header from './components/Header'
import Footer from './components/Footer'

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appartement" element={<AppartementPage />} />
        <Route path="*" element={<Error />} />
      </Routes>     
    </Router>
    <Footer />
  </React.StrictMode>,
  //document.getElementById('root')
)

