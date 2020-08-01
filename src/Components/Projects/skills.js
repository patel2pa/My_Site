import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl'; 
import "./skills.css";
import Footer from "../components2.0/Footer";

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
                I've worked with a wide variety of programming languages. For web applications 
                I use PHP and Javascript. Whenever I need the most performance possible 
                I obviously go with C++ and finally when I am building prototypes or working on my hobby projects I fall back on Python
                </div>
                </div>
                <div className = "skillsList"> 
                    <div> <b>Python</b> </div>
                    <div> <b>Javascript</b> </div>
                    <div> <b>Node.JS</b> </div>
                    <div> <b>Java</b> </div>
                </div>
                <div className = "skillsList"> 
                    <div> React</div>
                    <div> Django</div>
                    <div> REST </div>
                    <div> HTML/CSS </div>
                </div>
                <div className = "skillsList"> 
                    <div> Git</div>
                    <div> Tensorflow</div>
                    <div> AWS </div>
                    <div> SQL </div>
                </div>
                <div className = "tools">
                    <h4><b>Tools</b></h4>
                </div>
                <div className = "skillsList" > 
                    <div> <b>Microcontrollers</b> </div>
                    <div> <b>SolidWorks</b> </div>
                    <div> <b>LabView</b> </div>
                    <div> <b>Circuit Design</b> </div>
                </div>
                </div>
                <Footer/>
            </div>
        )

    }


}

export default Skills; 