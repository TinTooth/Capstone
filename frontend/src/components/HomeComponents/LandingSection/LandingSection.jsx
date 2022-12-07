import "./LandingSection.css"

import React, {useRef} from "react"
import { useNavigate } from "react-router-dom";

const LandingSection = () => {
    const navigate = useNavigate()
    
    const handleSectionClick = e => {
        switch(e.target.name) {
            case "cakes" : console.log("scroll to cake");break;
            case "cupcakes" : console.log("scroll to cupcake");break;
            case "cookies" : console.log('scroll to cookie');break;
            case "goodies" :console.log('scroll to goodies');break;
        }
    }

    const handleOrderClick = () => {
        console.log("NAVIGATE TO ORDER PAGE")
        // navigate('path goes here')
    }

    return (
        <div className="section-container">
            <div className="nav-bar">
                <button onClick = {handleSectionClick} name = 'cakes'>Cakes</button>
                <button onClick = {handleSectionClick} name = 'cupcakes'>Cupcakes</button>
                <button onClick = {handleSectionClick} name = 'cookies'>Cookies</button>
                <button onClick = {handleSectionClick} name = 'goodies'>Other Goodies</button>
                <button onClick={handleOrderClick}>Order</button>
            </div>
            <div className="title-container">
                <div className="heading1 font1">Blue Fox</div>
                <div className="heading2 font1">Bakery</div>
                <div className="subhead">
                    A Home Bakery in Fox Point Wisconsin
                </div>
                <div className="subhead"> Started by Lisa in 2017, she has been sweeting up events since!</div>
            </div>
            <div className="footer font1"> See Lisa's Creations Below</div>
        </div>
      );
}
 
export default LandingSection;