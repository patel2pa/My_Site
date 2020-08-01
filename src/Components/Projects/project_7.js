import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import ArcheMedX from "../components2.0/images/archemedx.png";
import ArcheMedX2 from "../components2.0/images/archemedx2.png";


class Project_7 extends Component {

    
        state = {
            imag: ArcheMedX
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
 
                             <div >
                             
                                <img 
                                         src = {ArcheMedX}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(ArcheMedX)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer' }}/> 

                                <img className = "edit_image"
                                         src = {ArcheMedX2}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(ArcheMedX2)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>  
                               
                                                   
                             </div>
 
                             </Cell>
 
                             
                     </Cell>
 
                     <Cell col={4}> 
                     <div style = {{textAlign: 'center', paddingRight: '3em', paddingTop: '2em'}}>
                        <h3 > ArcheMedX, Inc</h3>
                        <h5 style={{borderBottom: '3px solid #010101'}}>Software Test Engineer</h5>
                        Shotly after graduting from JMU, I started working at 
                        ArcheMedX as a freelance Software Test Engineer.
                        At ArcheMedX, I am 
                        Responsible for delivering quality software to our clients. 
                        I do this through automation and manual testing. 
                        I write automation scripts to reduce monotonous tasks 
                        and conduct manual testing via many browsers and devices. 
                        At ArcheMedX, I picked up new skills as Continuous Intergration, 
                        Manual testing and Automation test, along with new technologies such
                        as Cypress and TypeScript. I collabate with developes to 
                        set testing protocols and participate in standup meetings.  
                        </div>  
 
                     </Cell>
                 </Grid>





            </div>


        )


    }


}

export default Project_7; 