import "./LandingSection.css"

import React from "react"
import { useNavigate } from "react-router-dom";

const LandingSection = ({cookieRef, cakeRef, cupcakeRef, goodiesRef}) => {
    const navigate = useNavigate()
    


    const handleSectionClick = e => {
        switch(e.target.name) {
            case "cakes" : cakeRef.current?.scrollIntoView({behavior: "smooth"});break;
            case "cupcakes" : cupcakeRef.current?.scrollIntoView({behavior: "smooth"});break;
            case "cookies" : cookieRef.current?.scrollIntoView({behavior: "smooth"});break;
            case "goodies" : goodiesRef.current?.scrollIntoView({behavior: "smooth"});break;
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