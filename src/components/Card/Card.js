import "./card.scss"
import { Link } from "react-router-dom"

function Card({title, id, datas}) {

    

    const handleClick = (id) => {

        // Sélectionne les datas de l'id cliqué
        const datasFilter = datas.filter(data => data.id === id)
           
        //Enregistre les datas sélectionnées dans le local storage
        localStorage.setItem("dataSelected", JSON.stringify(datasFilter))
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


