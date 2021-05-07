import { Component } from "react";
import Card from '../Card/Card';
import './CardList.css'

class CardList extends Component {

    render(){

        return(
            <div className="cardListContainer">
                {this.props.chosen.map((x)=><Card 
                    house={x.house} 
                    image={x.image} 
                    name={x.name} 
                    gender={x.gender}
                    key={x.image+x.name}
                />)}
               
            </div>
        )
    }
}

export default CardList

