import React from "react";
import "./Header.css";
import parthImage from  "./images/Parth_image.jpg"

class Header extends React.Component{
    render(){
        return(
        <div>
            <div className = "header">

    
            <div className="hero container">
            
            {/* <div className="hero-copy">
                <img className = "selfImage" src = {parthImage}/>
            </div> */}

            <div className = "name">
                Parth A Patel
            </div>
            <div className = "profession">
                Engineer and a Developer
            </div>
            </div>
        </div>
        </div>
        )
    }

}

export default Header;