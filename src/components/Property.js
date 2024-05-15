import { useState } from "react"
import "../styles/property.scss"
import Collapse from "./Collapse"

const description = "Description"
const equipements = "Équipements"

function Property({datas}) {
    
    // const newKey = new Date().getTime()
    
    const ratingNote = datas.map((data) => data.rating)
    const contentDescription = datas.map((data) => data.description)
    const contentEquipement = datas.map((data) => (
        <ul className="equipmentList">{data.equipments.map((equipement) => <li>{equipement}</li>)}</ul>
    ))

    

    const rating = () => {
        const range1 = [1, 2, 3, 4, 5]
        let pos = 0
        let n = range1.length - ratingNote
        range1.splice(pos, n) 
        
        const range2 = [1, 2, 3, 4, 5]
        n = range1.length - (range1.length - ratingNote)
        range2.splice(pos, n)
        
        
        return (
            <div className="rating">                
                <div>
                    {range1.map((key) => (<i key={key.index} className="fa-solid fa-star" style={{color: "#FF6060"}}></i>))}
                </div>
                <div>
                    {range2.map(() => (<i className="fa-solid fa-star" style={{color: "#E3E3E3"}}></i>))}
                </div>
            </div>
        )
    }

    return (
        <div>
            {datas.map((data) => {
                return (
                    <div className="property">
                        <div className="general-property">
                            <div className="section1">
                                <h1 className="title">{data.title}</h1>
                                <p className="location">{data.location}</p>
                                <ul className="tags">
                                    {data.tags.map((tag) => <li key={tag}>{tag}</li>)}
                                    
                                </ul>
                            </div>
                            <div className="section2">
                                <div className="host">
                                    <p>{data.host.name}</p>
                                    <img src={data.host.picture} alt="portrait propriétaire"/>
                                </div>                             
                                {rating()}                            
                            </div>
                        </div>
                        <div className="property-collapse">
                            <div><Collapse title={description} content={contentDescription} /></div>
                            <div><Collapse title={equipements} content={contentEquipement} /></div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
    
}

export default Property