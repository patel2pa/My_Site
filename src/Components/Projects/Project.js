import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import ComprehensiveProjects from './project_2';
import Skills from "./Skills/skills"


class Project extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){

    
        if(this.state.activeTab === 0){
            return(
                <div >
                    <div className = "projectTitle"> -- Work/Projects of the past and present -- </div>
                    <ComprehensiveProjects/>
                </div>
            )
        }

        else if(this.state.activeTab === 1){
            return(
                <div>

                    <Skills/>     
            
                </div>
            )
        }
    
    }

    render(){
        return(
            <div>
                
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState ({activeTab: tabId})} 
                ripple>
                    <Tab>Experience</Tab>
                    <Tab>Skills</Tab>
                    
                </Tabs>
                    
                <Grid>
                    <Cell col = {12}>
                        <div className = "content">{this.toggleCategories()}</div>
                    </Cell>  
                </Grid> 
            </div>


        )


    }


}

export default Project; 