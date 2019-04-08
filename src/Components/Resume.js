import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import Education from './education'; 
import Experience from './experience';
import Skills from './Skills';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}> 
                        <div style = {{textAlign: 'center'}}>
                            <img 
                                src = "https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt = "avatar"
                                style={{height: '200px'}}/>
                        </div>

                        <h2 style={{paddingTop: '2em'}}> Parth Patel </h2>
                        <h4 style = {{color: 'gray'}}>Engineer, Programmer</h4>
                        <hr style={{borderTop: '3px solid #010101', width: '50%'}}/>
                        <p>Somthing</p>
                        <hr style={{borderTop: '3px solid #010101', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Stanley, VA</p>
                        <h5>Email</h5>
                        <p>Patel2pa.arvind@gmail.com</p>
                        
                        <hr style={{borderTop: '3px solid #010101', width: '50%'}}/>
                        

                    </Cell>

                    <Cell className = 'resume-right' col = {8}>
                        <h2>Education</h2>


                        <Education 
                            startYear = {2017}
                            endYear = {2020}
                            schoolName = {'James Madison University'}
                            schoolDescription = {'Bachelor in engineering (ABET accredited)'}
                        />

                        <Education 
                            startYear = {2015}
                            endYear = {2018}
                            schoolName = {'Blue Ridge Community Collage'}
                            schoolDescription = {'Associate Of Science in Engineering'}
                        />

                        

                        <hr style = {{boarderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience startYear = {2018}
                        endYear = {'Current'}
                        jobName = {"Aerial Multispectral Imaging"}
                        jobDescription = {"Software developer and System engineer"}
                        />
                        <Experience startYear = {2017}
                        endYear = {2018}
                        jobName = {"Human Powered Vehicle"}
                        jobDescription = {"Researcher and prototype engineer"}
                        />
                        <Experience startYear = {2014}
                        endYear = {'Current'}
                        jobName = {"Parth Prop LLC"}
                        jobDescription = {"Assistant Manager"}
                        />

                        <hr style = {{boarderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>

                        <Skills skills = "Python"
                        progress = {75}                        
                        />

                        <Skills skills = "JavaScript"
                        progress = {60}                        
                        />

                        <Skills skills = "Java"
                        progress = {35}                        
                        />

                        <Skills skills = "Circuits & Instrumentation"
                        progress = {85}                        
                        />

                        <Skills skills = "Esri:Arc map"
                        progress = {10}                        
                        />







                    </Cell>
                </Grid>


            </div>


        )


    }


}

export default Resume; 