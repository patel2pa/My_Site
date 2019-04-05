import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Project_2 from './project_2';
class Project extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){

    if(this.state.activeTab === 0){
        return(
            
            <div className = "projects-grids"> 
                <div   className = "projects-grid">
                {/* Project 1 */}
                <Card shadow = {5} style = {{minWidth:  '450', margin: 'auto'}}>
                    <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                        React-revenous</CardTitle>
                    <CardText>
                    Revenous is a web app for 
                    searching the endless maze of 
                    restaurants within a particular 
                    city with three criteria: best match, 
                    highest rated and most reviewed. 
                    This app uses yelp API to find the desired restaurant. 
                    Try out the live demo.      
                    </CardText>
                    <div style = {{margin: "auto"}}>
                    <CardActions border >
                        <Button href = "https://github.com/patel2pa/Revenous" target = "_blank">   Github </Button>
                        <Button href = "https://revenous-react-web-app.netlify.com" target = "_blank">   Live Demo </Button>
                    </CardActions>
                    </div>
                    <CardMenu style = {{color: '#fff'}}>  
                        <IconButton name = "share"/>        
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
                        <IconButton name = "share"/>        
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
                        <Button>   Github </Button>
                        <Button href = "http://patel2pa-vue-todo.netlify.com" target = "_blank">Live Demo</Button>
                    </CardActions>
                    </div>
                    <CardMenu style = {{color: '#fff'}}>  
                        <IconButton name = "share"/>        
                    </CardMenu> 
                </Card>

                </div>
                <div className = "projects-grid">
                <Card   shadow = {5} style = {{minWidth:  '450', margin: 'auto'}}>
                    <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn01.alison-static.net/courses/423/alison_courseware_intro_423.jpg) center / cover'}}>
                        Python Project - Titanic</CardTitle>
                    <CardText>
                        Somthing
                    </CardText>

                    <CardActions border>
                        <Button>   Github </Button>
                    </CardActions>
                    <CardMenu style = {{color: '#fff'}}>  
                        <IconButton name = "share"/>        
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
                            <Button href = "https://github.com/patel2pa/meme_generator">   Github </Button>
                            <Button href = "https://meme-generator-react-app.netlify.com" target = "_blank">   Live Demo </Button>
                        </CardActions>
                        </div>
                        <CardMenu style = {{color: '#fff'}}>  
                            <IconButton name = "share"/>        
                        </CardMenu> 
                </Card>

                <Card shadow = {5} style = {{minWidth:  '450', margin: 'auto'}}>
                        <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn01.alison-static.net/courses/423/alison_courseware_intro_423.jpg) center / cover'}}>
                            Python - The Stock Market</CardTitle>
                        <CardText>
                            Somthing
                        </CardText>

                        <CardActions border>
                            <Button>   Github </Button>
                        </CardActions>
                        <CardMenu style = {{color: '#fff'}}>  
                            <IconButton name = "share"/>        
                        </CardMenu> 
                </Card>
                </div>
                
            </div>
        )
    }
    else if(this.state.activeTab === 1){
        return(
            <div >
               <Project_2/>
            </div>
        )
    }
    
}

    render(){
        return(
            <div>
                
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState ({activeTab: tabId})}
                    ripple>

                    <Tab>Software Related</Tab>
                    <Tab>Engineer projects</Tab>
                    
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