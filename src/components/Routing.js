import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import AppartementPage from '../pages/AppartementPage'
import Header from './Header'
import Footer from './Footer'

function Routing() {

        

    return (
        <div>
            <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/appartement/:id" element={<AppartementPage />} />
                <Route path="*" element={<Error />} />
            </Routes>     
            </Router>
            <Footer />
        </div>
    )
}

export default Routing


      