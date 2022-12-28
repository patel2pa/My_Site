import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import ComprehensiveProjects from './project_2';
import Skills from "./skills"


class Project extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){

        if(this.state.activeTab === 1){
            return(
                
                <div className = "projects-grids"> 
                    <div   className = "projects-grid">


                    {/* Project 1 */}
                        <Card shadow = {5} style = {{minWidth:  '450', margin: 'auto'}}>
                            <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                                React JS-revenous</CardTitle>
                            <CardText>
                            Revenous is a web app for 
                            searching the endless maze of 
                            restaurants within a particular 
                            city with three criteria: best match, 
                            highest rated and most reviewed. 
                            This app uses React JS, HTML/CSS, Node JS and yelp API to find the desired restaurant. 
                            Try out the live demo.      
                            </CardText>
                            <div style = {{margin: "auto"}}>
                            <CardActions border >
                                <Button href = "https://github.com/patel2pa/Revenous" target = "_blank">   Github </Button>
                                <Button href = "https://revenous-react-web-app.netlify.com" target = "_blank">   Live Demo </Button>
                            </CardActions>
                            </div>
                            <CardMenu style = {{color: '#fff'}}>  
                                        
                            </CardMenu> 
                        </Card>


                    {/* Project 2 */}
                        <Card shadow = {5} style = {{minWidth:  '450', margin: 'auto'}}>
                            <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn01.alison-static.net/courses/423/alison_courseware_intro_423.jpg) center / cover'}}>
                                Python Project - Astroids</CardTitle>
                            <CardText>
                            My introduction to programming was through 
                            developing games via simplegui library. 
                            This introductory class was design centric and a project based course. 
                            Through this class I learned to develop 
                            fundamental programming skills in python, 
                            detect and resolve bugs, write good code and develope good coding habits.
                            The final project was to build the asteroid game 
                            this was an comprehensive design project, 
                            which combined many of the skills that i had developed throughout the course.  

                            </CardText>

                            <CardActions border>
                                <Button href = "https://github.com/patel2pa/Games/tree/master/Asteroids" target = "_blank">   Github </Button>
                                
                            </CardActions>
                            <CardMenu style = {{color: '#fff'}}>  
                                        
                            </CardMenu> 
                        </Card>

                        <Card shadow = {5} style = {{minWidth:  '450', margin: 'auto'}}>
                            <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2400/1*QIg6vEjZmT5YMVKU5Rxr2A.png) center / cover'}}>
                                Vue - Todo</CardTitle>
                            <CardText>
                            This is a Todo web app implemented through the vue framework. Try out the live demo. 
                            </CardText>
                            <div style = {{margin: "auto"}}>
                            <CardActions border>
                                <Button href = "https://github.com/patel2pa/To_Do/tree/master/Todo_App" target = "_blank">   Github </Button>
                                <Button href = "http://patel2pa-vue-todo.netlify.com" target = "_blank">Live Demo</Button>
                            </CardActions>
                            </div>
                            <CardMenu style = {{color: '#fff'}}>  
                                    
                            </CardMenu> 
                        </Card>

                    </div>
                    <div className = "projects-grid">
                        <Card   shadow = {5} style = {{minWidth:  '450', margin: 'auto'}}>
                            <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn01.alison-static.net/courses/423/alison_courseware_intro_423.jpg) center / cover'}}>
                                Python Project- zombie apocalypse </CardTitle>
                            <CardText>
                            This is a project part of the Principle Of Computing course. 
                            The essence of the project demonstrates the application 
                            of the search algorithm. This is done by building a zombie 
                            apocalypse game. The game consists of zombies, human, and obstacles. 
                            The goal is to keep the humans alive by building obstacles that inhibit 
                            zombies movement. The zombies can move up, down, left and right. 
                            Humans can move in any direction.     

                            </CardText>

                            <CardActions border>
                                <Button href = "https://github.com/patel2pa/Games/tree/master/Zombie%20Apocalypse" target = "_blank">   Github </Button>
                            </CardActions>
                            <CardMenu style = {{color: '#fff'}}>  
                                    
                            </CardMenu>                    
                        </Card>

                        <Card shadow = {5} style = {{minWidth:  '450', margin: 'auto'}}>
                                <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                                    React- meme_generator #2</CardTitle>
                                <CardText>
                                    This was a one of the first project implemented while learning react js,  
                                    it is a meme generator. Try out the live demo.
                                </CardText>
                                <div style = {{margin: "auto"}}>
                                <CardActions border>
                                    <Button href = "https://github.com/patel2pa/meme_generator" target = "_blank">   Github </Button>
                                    <Button href = "https://meme-generator-react-app.netlify.com" target = "_blank">   Live Demo </Button>
                                </CardActions>
                                </div>
                                <CardMenu style = {{color: '#fff'}}>  
                                        
                                </CardMenu> 
                        </Card>

                        <Card shadow = {5} style = {{minWidth:  '450', margin: 'auto'}}>
                                <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn01.alison-static.net/courses/423/alison_courseware_intro_423.jpg) center / cover'}}>
                                    Python Project- The Stock Market</CardTitle>
                                <CardText>
                                This is a project that I completed in January of 2019. 
                                It’s a numerical stock analysis using Numpy, Sklearn, Beautiful Soup and Pandas library in python. 
                                The essence of the project is to 
                                forecast stock prices through patterns that 
                                might have occurred in previous years. 
                                This is done by comparing and contrasting array 
                                of stocks to the one that is of interest and finding a 
                                positive correlation, using this correlation and machine 
                                learning algorithms it might be possible to 
                                predict the price of a stock a day or two days ahead. 
                                This is a very rudimentary hypothesis and through several test and iterations, 
                                it can be concluded that it is very hard to predict the future.
                                But this script incorporates a lot of different 
                                elements and it is a foundation for building more robust algorithms.   
                                </CardText>

                                <CardActions border>
                                    <Button href = "https://github.com/patel2pa/Data-Analysis/blob/master/Data_Analysis/Stock_data_analysis.py" target = "_blank">   Github </Button>
                                </CardActions>
                                <CardMenu style = {{color: '#fff'}}>  
                                        
                                </CardMenu> 
                        </Card>
                    </div>
                    
                </div>
            )
        }
        else if(this.state.activeTab === 0){
            return(
                <div >
                    <div className = "projectTitle"> -- Work/Projects of the past and present -- </div>
                    <ComprehensiveProjects/>
                </div>
            )
        }

        else if(this.state.activeTab === 2){
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
                    <Tab>Personal Projects</Tab>
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