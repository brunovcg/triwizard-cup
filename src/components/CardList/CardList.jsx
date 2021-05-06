import { Component } from "react";
import Card from '../Card/Card';
import './CardList.css'

class CardList extends Component {

    render(){

        return(
            <div className="cardListContainer">
                <Card house={"Ravenclaw"}/>
                <Card house={"Gryffindor"}/>
                <Card house={"Hufflepuff"}/>
               
            </div>
        )
    }

}

export default CardList