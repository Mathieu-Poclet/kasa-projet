import "./property.scss"
import Collapse from "../Collapse/Collapse"

const description = "Description"
const equipments = "Équipements"

function Property({datas}) {
    
    let index = 0
    const ratingNote = datas.map((data) => data.rating)
    const contentDescription = datas.map((data) => data.description)
    const contentEquipement = datas.map((data) => {
        return (
            <ul key={data.id} className="equipmentList">
                {data.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
            </ul>
        )
    })

    const increment = () => {
        index = index + 1
    }

    const rating = () => {
        const range1 = [1, 2, 3, 4, 5]
        let pos = 0
        let n = range1.length - ratingNote
        range1.splice(pos, n) 
        
        const range2 = [6, 7, 8, 9, 10]
        n = range1.length 
        range2.splice(pos, n)
        
        return (
            <div className="rating">                
                <div>
                    {range1.map(() => {
                        return (
                            <div key={range1[index] + "range1"}>
                                <i className="fa-solid fa-star" style={{color: "#FF6060"}}></i>
                                {increment()}    
                            </div>
                        )
                    })}
                </div>
                
                <div>
                    {range2.map(() => {
                        return (
                            // [index - n] remet index à 0
                            <div key={range2[index - n] + range2}>
                                <i className="fa-solid fa-star" style={{color: "#E3E3E3"}}></i>
                                {increment()}    
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div>
            {datas.map((data) => {
                return (
                    <div key={data.id} className="property">   
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
                    </div>
                )
            })}
            <div className="property-collapse">
                <div><Collapse title={description} content={contentDescription} /></div>
                <div><Collapse title={equipments} content={contentEquipement} /></div>
            </div>
        </div>
    )
 
}

export default Property