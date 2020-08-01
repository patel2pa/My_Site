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
                        The Human Powered Vehicle was part of a 
                        sophomore design project with an objective 
                        of utilizing the human-centered process to design 
                        and manufacture a custom bike for a young community 
                        member with arthrogryposis. As a researcher,  
                        I analyzed different components to understand their 
                        feasibility with other components through conversation 
                        with experts and online articles. Additionally, 
                        I was a Prototype engineer, 
                        I built 6 different prototypes to inspect 
                        the subsystem facility and communicate the 
                        design with the client. Through this project, 
                        I learned the importance of communication and prototyping.  
                        </div>  
 
                     </Cell>
                 </Grid>





            </div>


        )


    }


}

export default Project_7; 