//import { useState } from "react"
import "../styles/card.scss"
//import Datas from "../datas/datas.json";

import { Link } from "react-router-dom";

function Card({title, id, datas, setDatas}) {

    //state
    //const[datas, setDatas] = useState(Datas)
    //console.log(datas)



    //comportement
    const handleClick = (id) => {
        const datasCopy = [...datas]
        console.log(id)

        const dataCopyUpdated = datasCopy.filter(data => data.id === id)
        setDatas(dataCopyUpdated)
        // dataCopyUpdated.map((data) => (
        //     console.log(data.title)
        // ))
        
        
} 
    return (
        <Link to="/appartement">
            <div className="card" onClick={() => handleClick(id)}>
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default Card
