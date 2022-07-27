import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';


function Experience(){
    return (
    <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2013-2016"
            iconStyle={{background: "#3e497a", color:"#fff"}} 
            >
                <h2>Education</h2>
                <h3>Bachelor degree of economics, Chiang Mai University Thailand.</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2018-2020"
            iconStyle={{background: "#457b9d", color:"#fff"}} 
            >
                 <h2>Work Experience</h2>
                <h3>Manager, DoiChaang Cafe , Chiang Rai Thailand.</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2021-2022"
            iconStyle={{background: "#3e497a", color:"#fff"}} 
            >
                 <h2>Education</h2>
                <h3>FullStack Developer, FooCoding, Malmö Sweden.</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2022-Present"
            iconStyle={{background: "#3e497a", color:"#fff"}} 
            >
                 <h2>Education</h2>
                <h3>Programming, Lexicon, Malmö Sweden.</h3>
            </VerticalTimelineElement>

        </VerticalTimeline>
        </div>

);
}

export default Experience; 