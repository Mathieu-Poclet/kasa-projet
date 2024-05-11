import "../styles/cardList.scss"
import Card from "./Card"

function CardList({datas, setDatas}) {    

    return (
        <div className="container">
            {datas.map(({ id, title }) => (
                <div key={id}>                           
                    <Card id={id} title={title} datas={datas} setDatas={setDatas} />                     
                </div>
            ))}
        </div>      
    )
}

export default CardList
