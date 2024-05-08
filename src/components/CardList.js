//import React from "react";
import "../styles/cardList.scss";
import Datas from "../datas/datas.json";
import Card from "./Card";

//import { useState } from "react";
   
// export class CardList extends Component {
//     render() {
//         return (            
//                 <div className="container">
//                     {Datas.map(({ title, id }) => (
//                         <div key={id}>
//                             <Link to="/appartement">
//                                 <Card  title={title} id={id}/>
//                             </Link>
//                         </div>
//                     ))}
//                 </div>            
//         )
//     }
// }

function CardList({datas, setDatas}) {

    

    return (
        <div className="container">
                     {Datas.map(({ id, title }) => (
                        <div key={id}>                            
                            <Card id={id} title={title} datas={datas} setDatas={setDatas} />                     
                        </div>
                    ))}
                </div>      
    )
}

export default CardList;