import "../styles/cardList.scss";
import Card from "./Card";

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

export default CardList;


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
