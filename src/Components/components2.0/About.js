import React from "react";
import "./About.css";
import {Link} from "react-router-dom";
import parthImage from  "./images/Self2.jpg";
import Footer from "./Footer";


class About extends React.Component{
    render(){
        return(
        <div>
            <div className = "about" >
               
                <div className = "aboutDescription">

                    <div  className = "aboutme">
                        ABOUT ME
                    </div>

                    <div className = "about1">
                        Hi, I am parth
                    </div>

                    <div className = "about2">

                    I am a recent engineering graduate from James Madison University 
                    with experiences in multiple engineering discipline 
                    which include Software, Electrical, and Mechanical.  

                    </div>
                    
                    <div className = "about3">
                    I am always looking for opertunities to learn and 
                    expend my pool of knowalge and 
                    Shortly after graduating from Northeastern University, 
                    I joined the engineering team at Upstatement where 
                    I work on a wide variety of interesting and meaningful projects on a daily basis.
                    </div>
                    <div className = "about4">
                    Some of the skills that I have developer in the past two months:
                    </div>
                    <div className = "about5">
                        <div> - Automation and Manual Testing</div>
                        <div> - Cypress JS</div>
                        <div> - Java Springboot</div>
                        <div> - Typescript</div>

                    </div>

                </div>
                <div className="aboutImage">
                    <img className = "SelfImage" src = {parthImage}/>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }

}

export default About;