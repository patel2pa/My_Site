import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl'; 
import "./skills.css";
import Footer from "../../components2.0/Footer";

class Skills extends Component {
    render(){
        return(
        <div>
            <div className = "skillsWhole">
            <div className = "skills">
                <div className="skillsTitle">
                    Skills
                </div>  
                <div className = "skillsDescription">
                    I am alway looking to learn new skills and technologies. Here are some of my Skills.    
                </div>
                </div>
                <div className = "skillsList"> 
                    <div> <b>Python</b> </div>
                    <div> <b>Javascript</b> </div>
                    <div> <b>Node.JS</b> </div>
                    <div> <b>Java</b> </div>
                </div>

                <div className = "skillsList"> 
                    <div> Git</div>
                    <div> Angular</div>
                    <div> AWS </div>
                    <div> SQL </div>
                </div>

                <div className = "skillsList"> 
                    <div> React</div>
                    <div> Rest</div>
                    <div> HTML </div>
                    <div> CSS </div>
                </div>

                <div className = "skillsList"> 
                    <div> Angular JS</div>
                    <div> Spring Boot</div>
                    <div> Agile </div>
                    <div> Jira </div>
                </div>
            
                </div>
            </div>
        )

    }


}

export default Skills; 