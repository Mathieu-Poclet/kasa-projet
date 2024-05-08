import { useState } from "react"
import "../styles/card.scss"
import Datas from "../datas/datas.json";

function Card({title, id}) {

    //state
    const[datas, setDatas] = useState(Datas)
    //console.log(datas)



    //comportement
    const handleClick = (id) => {
        const datasCopy = [...datas]
        //console.log(datasCopy)

        const dataCopyUpdated = datasCopy.filter(data => data.id === id)
        setDatas(dataCopyUpdated)
        dataCopyUpdated.map((data) => (
            console.log(data.title)
        ))
        
        
} 
    return (
        <div className="card" onClick={() => handleClick(id)}>
            <h2>{title}</h2>
        </div>
    )
}

export default Card
