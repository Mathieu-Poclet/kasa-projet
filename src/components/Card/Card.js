import "./card.scss"
import { Link } from "react-router-dom"

function Card({title, id, datas, cover}) {

    const handleClick = (id) => {

        // Sélectionne les datas de l'id cliqué
        const datasFilter = datas.filter(data => data.id === id)
           
        //Enregistre les datas sélectionnées dans le local storage
        localStorage.setItem("dataSelected", JSON.stringify(datasFilter))
    } 

    return (
        <Link to={"./appartement/"+id} className="card">
            <div className="image-container" onClick={() => handleClick(id)}>
                <img src={cover} alt={title} />
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default Card


