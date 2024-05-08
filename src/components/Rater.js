import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import AppartementPage from '../pages/AppartementPage'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import { useState } from 'react'
import Datas from "../datas/datas.json";


function Rater() {

    const[datas, setDatas] = useState(Datas)
    // datas.map((data) => (
    //     console.log(data.title)
    // ))

    return (
        <div>
            <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home datas={datas} setDatas={setDatas} />} />
                <Route path="/about" element={<About />} />
                <Route path="/appartement" element={<AppartementPage datas={datas} setDatas={setDatas} />} />
                <Route path="*" element={<Error />} />
            </Routes>     
            </Router>
    <Footer />
        </div>
    )
}

export default Rater


      