import "../styles/slideShow.scss"

import Datas from "../datas/datas.json";

import { useState } from "react";



function SlideShow(photo) {

    //state
    const[datas, setDatas] = useState(Datas)
    
    
    

    //comportement
    const toto = () => {
        const datasCopy = [...datas]
       

        const dataCopyUpdated = datasCopy.filter(data => data.id === "c67ab8a7")
        
        setDatas(dataCopyUpdated)
        
    }
    

    //affichage
    return (
        <div>
            <img src={photo} alt="apreçu de l'appartement" />
            <ul>
                {datas.map((data) => {
                    return <li key={data.id}>{data.title}</li>
                })}
            </ul>
            <button onClick={toto}>clique</button>
        </div>
    )
}

export default SlideShow