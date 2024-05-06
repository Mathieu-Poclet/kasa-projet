import React, { Component } from "react";
import "../styles/cardList.scss";
import Datas from "../datas/datas.json";
import Card from "./Card";

import { Link } from "react-router-dom";
   
export class CardList extends Component {
    render() {
        return (
            <Link to="/appartement">
                <div className="container">
                    {Datas.map(({ title, id }) => (
                        <div key={id}>
                            <Card  title={title} id={id}/>
                        </div>
                    ))}
                </div>
            </Link>
        )
    }
}

export default CardList;