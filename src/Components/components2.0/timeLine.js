import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class TimeLine extends React.Component{
    render(){
        return(
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">JMU Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Harrisonburg, VA</h4>
            <p>
            Graduated with a Bachelor of Science in Engineering
            </p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">Hacking 4 Defense</h3>
            <h4 className="vertical-timeline-element-subtitle">Harrisonburg, VA</h4>
            <p>
            Presented the final solution to Military personals, experts, professors and peers
            </p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="April 2020"
                iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">Engineer Capston</h3>
            <h4 className="vertical-timeline-element-subtitle">Harrisonburg, VA</h4>
            <p>
            Finished and presented 2 years long capstone, 
            centered around curtailing eutrophication in bodies of water 
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="April 2020"
                iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">Bearables</h3>
            <h4 className="vertical-timeline-element-subtitle">Harrisonburg, VA</h4>
            <p>
            Finalized a system for remote communication of bear behavior data and 
            IoT infrastructure     
            </p>
        </VerticalTimelineElement>
        
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="January 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">Hacking for Defense</h3>
            <h4 className="vertical-timeline-element-subtitle">Harrisonburg, VA</h4>
            <p>
            Started Hacking for Defense project, comprising of Lean start-up approach, 
            conducted 40 interviews and iterating through solution each week
            </p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="December 2020"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title"> IoT project </h3>
            <h4 className="vertical-timeline-element-subtitle">Harrisonburg, VA</h4>
            <p>
            Used radio communication to send data from a handheld device to 
            python for counting the number of steps taken 
            </p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2020"
                iconStyle={{ background: 'rgb(255, 64, 0)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">Lunar lander</h3>
            <h4 className="vertical-timeline-element-subtitle">JMU - System Engineering</h4>
            <p>
            Evaluate lunar lander spring and damper system utilizing 
            System Engineering principle 
            </p>
        </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="May 2019"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">Madison Engineering xChange</h3>
            <h4 className="vertical-timeline-element-subtitle">JMU Engineering</h4>
            <p>
            Capstone team awarded first place in Jame Madison Engineering xChange.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="May 2018"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title"> Human-Powered Vehicle Project</h3>
            <h4 className="vertical-timeline-element-subtitle">JMU Engineering</h4>
            <p>
            Worked with a team to design and build a custom bike for a 10-year-old with disabilities.
            </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
        )
    }
}


export default TimeLine;