import "../styles/card.scss"
import { Link } from "react-router-dom"

function Card({title, id, datas, setDatas}) {

    const handleClick = (id) => {
        const datasCopy = [...datas]
        const dataCopyUpdated = datasCopy.filter(data => data.id === id)
        setDatas(dataCopyUpdated)      
        
        //local storage
        localStorage.setItem("newData", JSON.stringify(dataCopyUpdated))
        console.log("newData", dataCopyUpdated)
    } 

    return (
        <Link to={"./appartement/"+id}>
            <div className="card" onClick={() => handleClick(id)}>
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default Card


