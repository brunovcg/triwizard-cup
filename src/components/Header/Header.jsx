import React, { Component } from "react";
import './Header.css'
import LogoHog from '../../assets/Hogwarts.png'

class Header extends Component {
    render(){
        return(
            <div className="headerBox">
                 <div className="fontHarry">Triwizard Cup</div>
                 <img src={LogoHog} alt="logoHogwarts" />
            </div>
        )
    }
}

export default Header