import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import AppartementPage from '../pages/AppartementPage'
import Header from './Header'
import Footer from './Footer'
import Datas from "../datas/datas.json";

function Routing() {

    const[datas, setDatas] = useState(Datas)    

    return (
        <div>
            <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home datas={datas} setDatas={setDatas} />} />
                <Route path="/about" element={<About />} />
                <Route path="/appartement/:id" element={<AppartementPage datas={datas} setDatas={setDatas} />} />
                <Route path="*" element={<Error />} />
            </Routes>     
            </Router>
            <Footer />
        </div>
    )
}

export default Routing


      