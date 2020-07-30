import React from "react";
import "./Header.css";
import parthImage from  "./images/Parth_image.jpg"

class Header extends React.Component{
    render(){
        return(
            <div className = "header">

    
        <div className="hero container">
            
            <div className="hero-copy">
                <img className = "selfImage" src = {parthImage}/>
            </div>
            <div className = "name">
                Parth A Patel
            </div>
            <div className = "profession">
                Software Engineer
            </div>
        </div>
        </div>
        )
    }

}

export default Header;