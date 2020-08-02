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
                I have diverse sets of skills ranging from Solidworks, 
                System analysis to React JS, and Mapbox GL. 
                I am always looking for opportunities to extend my pool of 
                knowledge and learn new skills here are some of my skills and tools that have used in the past.   
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