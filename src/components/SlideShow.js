import "../styles/slideShow.scss"

import Datas from "../datas/datas.json";

import { useState } from "react";



function SlideShow({photo, datas, setDatas}) {

    datas.map((data) => (
        console.log(data.title)
    ))

    

    //state
    
    
    
    

    //comportement
    
    
    

    //affichage
    return (
        <div>
            
            {datas.map((data) => {
                return (
                    <ul>
                        {data.title}<br />
                        {data.id}<br />
                        {data.pictures.map(pic => (<li key={pic}><img src={pic} alt="toto"></img></li>))}               
                        
                    </ul>
                    
                )
            })}
                
        </div>
    )
}

export default SlideShow