import React from "react";
import "./Header.css";
import parthImage from  "./images/Parth_image.jpg"

class Header extends React.Component{
    render(){
        return(
        <div>
            <div className = "header">

                <div className="hero container">

                    <div className = "name">
                        Parth A Patel
                    </div>

                    <div className = "profession">
                        Software Developer 
                    </div>

                </div>
            </div>
        </div>
        )
    }

}

export default Header;