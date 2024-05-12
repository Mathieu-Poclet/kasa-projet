import "../styles/slideShow.scss"
import { useState } from "react";
//import {FontAwesomeIcon} from "react"

function SlideShow({datas, setDatas}) {

    const [index, setIndex] = useState(0)

    const previous = (data) => {
        index === 0 ? setIndex(data.pictures.length - 1) : setIndex(index - 1)
    }    

    const next = (data) => {
        index === data.pictures.length - 1 ? setIndex(0) : setIndex(index + 1)
    }    
        
    return (
        <div>            
            {datas.map((data) => {  
                if(data.pictures.length > 1) {
                    return (                   
                        <div key={`${data.title}-${index}`} className="gallery">
                            <img src={data.pictures[index]} alt="vue appartement" />                    
                            <button className="left" onClick={() => previous(data)}><i className="fa-solid fa-chevron-left pointer"></i></button>
                            <button className="right" onClick={() => next(data)}><i className="fa-solid fa-chevron-right pointer"></i></button>                    
                            <div className="count">{index + 1}/{data.pictures.length}</div>
                        </div>
                    )
                } else {
                    return (
                        <div className="gallery">
                            <img src={data.pictures[index]} alt="vue appartement" /> 
                        </div>
                    )
                }     
                
            })}                
        </div>
    )
}


export default SlideShow



