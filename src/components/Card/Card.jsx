import { Component } from "react";
import './Card.css'
import Raven from '../../assets/Ravenclaw.png'
import Slyth from '../../assets/Slytherin.png'
import Gryffin from '../../assets/Gryffindor.png'
import Huffle from '../../assets/Hufflepuff.png'

class Card extends Component {


    render(){

        return(
            <div className={this.props.house}>

                <div className="cardHouse">
                    <div className="cardHouseName">{this.props.house}</div>
                    <div className="cardHousePhotoBox">
                        <img src = {
                            this.props.house === "Ravenclaw" ? Raven
                            : this.props.house === "Slytherin" ? Slyth
                            : this.props.house === "Gryffindor" ? Gryffin
                            : Huffle
                        }
                            alt="clan" 
                            className="cardHousePhoto"/>

                    </div> 
                </div>
                    <div className="cardCharPhoto">
                        <img src={this.props.image} 
                            alt="character" 
                            className="cardPhoto"/>
                    </div>
                     <div className="cardName">{this.props.name}</div>
                     <div className="cardBirth">{this.props.gender}</div>                    

            </div>
        )
    }

}

export default Card