import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl'; 
import "./skills.css"

class Skills extends Component {
    render(){
        return(
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
        )

    }


}

export default Skills; 