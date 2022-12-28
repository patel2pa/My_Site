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
                    with experiences in multiple engineering disciplines 
                    which include Software, Electrical, and Mechanical.
                    I am currently looking for full-time opportunities in these fields 
  

                    </div>
                    
                    <div className = "about3">
                    I am curious and competitive by nature and I am fortunate to grow up in circumstances that have allowed me to learn. As an earnest learner, my natural habit has been to consume knowledge from a multitude of sources. 
                    I have learned from a mixture of online tutorials, videos, books, and conversations with people. 
                    </div>
                    <div className = "about4">
                    Some of the skills that I have developed in the past two months:
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