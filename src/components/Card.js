import React, { Component } from "react";
import "../styles/card.scss";
import Datas from "../datas/datas.json";



const handleClick = (title) => {
    console.log(title)
    
}
   
    export class Card extends Component {
        render() {
            return (
                <div className="toto">
                    {Datas.map((item, i) => (
                        <div key={item.title} className="card" onClick={() => handleClick(item.title)}>

                            <h2>{item.title}</h2>

                        </div>
                    ))}
                </div>
            )
        }
    }

export default Card;


// export class Card extends Component {
//     render() {
//         return (
//             <div className="toto">                                               
//                 {Datas.map((item, i) => (
//                     <ul className="card" onClick={() => handleClick(item.title)}>
//                         <li key={item.title}>{item.title}</li>
//                     </ul>
//                 ))}      
//             </div>
//         );
//     }
// }
// export default Card;

// {Datas.map((item, i, cover) => (
//     <ul>
//         <li key={i}>{item.id}</li>
//         <li key={i}><img src={item.cover} alt="toto" /></li>
                   
//     </ul>                                    
// ))}    