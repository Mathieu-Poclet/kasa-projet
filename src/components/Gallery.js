import React from "react";

const Gallery = ({datas, setDatas}) => {

    

    const handelClick = (index) => {     
        index++       
    }

    
    return (
        <div>            
            {datas.map((data, index) => {   
                console.log(data.title)             
                return (                   
                    <div key={`${data.title}-${index}`} className="gallery">
                        <img src={data.pictures[index]} alt="vue appartement" />
                        <button onClick={() => handelClick(index)}>suivant</button>
                    </div>
                )
            })}                
        </div>
    )
}

export default Gallery