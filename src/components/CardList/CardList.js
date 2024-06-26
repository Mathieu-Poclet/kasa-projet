import "./cardList.scss"
import Card from "../Card/Card"
import Datas from "../../datas/datas.json";

function CardList() {    

    const datas = Datas

    return (
        <div className="cardList">
            {datas.map(({ id, title, cover }) => (
                <div key={id}>                         
                    <Card id={id} title={title} cover={cover} datas={datas} />                     
                </div>
            ))}
        </div>      
    )
}

export default CardList
