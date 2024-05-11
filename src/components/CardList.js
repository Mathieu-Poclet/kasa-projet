import "../styles/cardList.scss"
import Card from "./Card"
import { useState } from 'react'
import Datas from "../datas/datas.json";


function CardList() {    

    const[datas, setDatas] = useState(Datas)

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
