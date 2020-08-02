import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import Drone_3 from './ProjectImages/Drone_3.jpg';
import Drone_1 from './ProjectImages/Done_1.PNG';
import Drone_2 from './ProjectImages/Drone_2.PNG';
import Drone_4 from './ProjectImages/Drone_3.PNG';
import Drone_5 from '../components2.0/images/skyPrecision1.png';
import Drone_6 from '../components2.0/images/skyPrecision2.png';

class Project_4 extends Component {

    
        state = {
            imag: Drone_3
        }


     
    onClickEvent = (new_img)=>{

        this.setState({
            imag: new_img
        })
    }


    render(){
        return(
            <div>
                   <Grid>
                    
                    <Cell col = {8}>
                         
                         <img 
                                 src = {this.state.imag}
                                 alt = "avatar"
                                 style={{height: '500px', width:'750px'}}/>
                             <Cell col = {12}>
 
                             <div >
                                 <img 
                                         src = {Drone_2}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Drone_2)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer' }}/>
                             
                                 <img className = "edit_image"
                                         src = {Drone_5}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Drone_5)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer' }}/>     
 
                                 <img 
                                         src = {Drone_6}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Drone_6)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/> 
 
                                 <img className = "edit_image"
                                         src = {Drone_3}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Drone_3)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>

                                             
                             </div>
 
                             </Cell>
 
                             
                     </Cell>
 
                     <Cell col={4}> 
 
                         
                         <div style = {{textAlign: 'center', paddingRight: '3em', paddingTop: '2em'}}>
                         <h3 >SkyPrecision</h3>
                         <h5 style={{borderBottom: '3px solid #010101'}}>Software Engineer</h5>
                         My specialty was focused on designing and developing software 
                         to facilitate the overreaching 
                         goal of the project, which was to develop a novel method for 
                         assessing and monitoring the health of Vines in  
                         Vineyard using UAV-based multispectral imagery.
                         I assisted in establishing the software architecture, build a drone skeleton, and developed the frontend through React JS, HTML, and CSS. I
                         gained hands-on experience in technologies such as ArcGIS, MapBox, Leaflet, and OpenDroneMap while working in 8 person team built around agile methodology. 
                         We recently made the local news, to view 
                          <a  href="https://www.whsv.com/content/news/JMU-students-create-project-to-help-vineyard-management-569862561.html"> click here</a>          
                         </div>  
 
                     </Cell>
                 </Grid>





            </div>


        )


    }


}

export default Project_4; 
