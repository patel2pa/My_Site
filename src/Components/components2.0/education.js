import React from "react";
import "./education.css";
import TimeLine from "./timeLine"


class Education extends React.Component{

    render(){
        return(
            <div>
            <div className="education">
                <div className="educationTitle">
                    EDUCATION
                </div>    
                <div className="university">
                    <b>James madison university</b>
                </div>
                <div className="degree">
                Bachelor of Science in Engineering
                </div>
                <div className="educationDescription">
                JMU Department of Engineering in an interdisciplinary general engineering 
                program that highlights a project-based learning experience for 
                their students. Through a wide variety of coursework, 
                students begin to challenge their technical knowledge and team 
                based work ethics to positively influence others and the community. 
                </div>
                <div className = "GPA"> 
                    GPA: 3.16
                </div>
                <div className="courses">Courses</div>

                </div>
                <div className = "courseList">
                    <div> Calculus I,II,III, IV</div>
                    <div> Chemistry</div>
                    <div> University Physics</div>
                    <div> Programming</div>
                    <div> Advanced Programming </div>
                    <div> Circuits and Instrumentation</div>
                    <div> Engineering Design I, II, III, IV, V, VI</div>
                    <div> Linear Algebra</div>
                    <div> Materials & Mechanics</div>
                    <div> Statics & Dynamics </div>
                    <div> Systems Dynamics</div>
                    <div> Thermal Fluids & Dynamics I, II</div>
                    <div> Engineering Managemen I, II</div>
                    <div> Bioprocess Engineering</div>
                    <div> Engineering Economics</div> 
                </div>
                <TimeLine/>
            </div>
        )
    }

}

export default Education;