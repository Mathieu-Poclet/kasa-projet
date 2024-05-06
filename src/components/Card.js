import "../styles/card.scss"


const handleClick = (cardTitle) => {
    console.log(cardTitle)    
}

function Card({title,id}) {
    return (
        <div className="card" onClick={() => handleClick(id)}>
            <h2>{title}</h2>
        </div>
    )
}

export default Card
