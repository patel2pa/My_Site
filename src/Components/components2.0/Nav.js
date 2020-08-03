import React from "react";
import "./Header.css";

class Header extends React.Component{
    render(){
        return(
            <div>
            <div className="top-nav">
            <div className="logo"><a href="/">Parth</a></div>
            <ul>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/education">Education</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/">Home</a></li>

            </ul>
        </div> 
    
        
        </div>
        )
    }

}

export default Header;