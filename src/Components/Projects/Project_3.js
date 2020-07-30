import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import EE_1 from './ProjectImages/EE_1.PNG'
import EE_2 from './ProjectImages/EE_2.PNG';
import EE_3 from './ProjectImages/EE_3.PNG';
import EE_4 from './ProjectImages/EE_4.PNG';


class Project_3 extends Component {
        state = {
            imag: EE_2
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
                                 style={{height: '500px', width: '750px' }}/>
                             <Cell col = {12}>
                             <div>
                                <img     
                                        
                                         src = {EE_3}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(EE_3)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer' }}/> 

                                <img className = "edit_image"
                                        onClick = {() => this.onClickEvent(EE_1)}
                                         src = {EE_1}
                                         alt = "avatar"
                                         onmouseover = ""
                                         style={{height: '50px', cursor: 'pointer'}}/>

                                <img className = "edit_image"
                                         onClick = {() => this.onClickEvent(EE_4)}
                                         src = {EE_4}
                                         alt = "avatar"
                                         onmouseover = ""
                                         style={{height: '50px', cursor: 'pointer'}}/> 

                                <img className = "edit_image"
                                         onClick = {() => this.onClickEvent(EE_2)}
                                         src = {EE_2}
                                         alt = "avatar"
                                         onmouseover = ""
                                         style={{height: '50px', cursor: 'pointer'}}/>  
                                                     
                             </div>
 
                             </Cell>
 
                             
                     </Cell>
 
                     <Cell col={4}> 
                     <div style = {{textAlign: 'center', paddingRight: '3em', paddingTop: '2em'}}>
                        <h3 > Circuits and Instruments</h3>
                        <h5 style={{borderBottom: '3px solid #010101'}}>Mini Projects</h5>
                        I completed two projects as part of Circuit and Sensor class. 
                        These projects help me extend my knowledge of design by 
                        utilizing theoretical skills learned in the classroom to 
                        building systems that have define purpose. 
                        The first system is an electrical thermometer with components 
                        such a Wheatstone bridge, instrument amplifier, and comparator. 
                        The second project was a functioning microphone which can display 
                        specific input frequency. 
                        This system consisted of an instrument amplifier, 
                        frequency filters and LED display.  
                        </div>  
 
                     </Cell>
                 </Grid>





            </div>


        )


    }


}

export default Project_3; 