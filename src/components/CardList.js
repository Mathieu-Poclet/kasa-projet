//import React from "react";
import "../styles/cardList.scss";
import Datas from "../datas/datas.json";
import Card from "./Card";

import { Link } from "react-router-dom";
   
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

function CardList() {
    return (
        <div className="container">
                     {Datas.map(({ title, id }) => (
                        <div key={id}>
                            <Link to="/appartement">
                                <Card  title={title} id={id}/>
                            </Link>
                        </div>
                    ))}
                </div>      
    )
}

export default CardList;