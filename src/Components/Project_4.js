import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import Drone_3 from '../Drone_3.jpg'
import Drone_1 from '../Done_1.PNG'
import Drone_2 from '../Drone_2.PNG'
import Drone_4 from '../Drone_3.PNG'



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
                                 style={{height: '500px', }}/>
                             <Cell col = {12}>
 
                             <div >
                                 <img 
                                         src = {Drone_2}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Drone_2)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer' }}/>
                             
                                 <img className = "edit_image"
                                         src = {Drone_4}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Drone_4)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer' }}/>     
 
                                 <img 
                                         src = {Drone_1}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Drone_1)}
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
                         <h3 >Aerial Multispectral Imaging</h3>
                         <h5 style={{borderBottom: '3px solid #010101'}}>Software Developer and System Engineer</h5>
                         Aerial multispectral imagery project is part of 
                         four-semester long engineering design courses, 
                         with an objective of providing students with knowledge of 
                         engineering design in their respective specialties. 
                         My specialty is focused on designing software 
                         and embedded systems to facilitate the overarching 
                         goal of the project, which is to develop a novel method for 
                         assessing and monitoring the risk of eutrophication in small 
                         bodies of water using UAV-based multispectral imagery. 
                         I have thus far used technologies such as Pix4D, OpenDroneMap, 
                         and python to model fertilizer runoff and analyzed chemical present in the body of water.       
                         </div>  
 
                     </Cell>
                 </Grid>





            </div>


        )


    }


}

export default Project_4; 