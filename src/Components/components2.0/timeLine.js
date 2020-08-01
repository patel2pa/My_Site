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
            Presented final solution to Military personals, experts, professors and peers
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
            IoT inferstructure     
            </p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
            User Experience, Visual Design
            </p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>
            Strategy, Social Media
            </p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(255, 64, 0)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>
            Creative Direction, User Experience, Visual Design
            </p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
            Creative Direction, Visual Design
            </p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            />
    </VerticalTimeline>
        )
    }
}


export default TimeLine;