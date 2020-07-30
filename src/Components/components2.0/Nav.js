import React from "react";
import "./Header.css";
import parthImage from  "./images/Parth_image.jpg"

class Header extends React.Component{
    render(){
        return(
            <div>
            <div className="top-nav ">
            <div className="logo"><a href="/">Parth</a></div>
            <ul>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/education">Education</a></li>
                <li><a href="#">Contect</a></li>
            </ul>
        </div> 
    
        
        </div>
        )
    }

}

export default Header;