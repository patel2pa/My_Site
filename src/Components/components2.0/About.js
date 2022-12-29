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
                        I am a Software Developer currently working at Kinsale Insuarance. 
                        I have experience in Fullstack Development and working with technologies 
                        such as Spring, Angular, SQL and multiple AWS services. 
                    </div>
                    
                    <div className = "about3">
                        I created this site back in 2020 as a way to learn React,
                        CSS and learn about deploying code to production, and I am
                        always looking to add new skills to my tool box. 
                        This website contains information about my experiences, contact information, and skills. 
                    </div>
                    <div className = "about4">
                        Here are some of the skills that I have Developed/Relearned in the past few months:
                    </div>

                    <div className = "about5">
                        <div> - React</div>
                        <div> - Provisioning Infrastructure</div>
                        <div> - CSS</div>
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