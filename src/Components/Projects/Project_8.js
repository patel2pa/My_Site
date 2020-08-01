import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import Pontem from "../components2.0/images/Pontem.png";
import Pontem2 from "../components2.0/images/pontem2.png";
import Pontem3 from "../components2.0/images/Pontem3.png";


class Project_8 extends Component {

    
        state = {
            imag: Pontem3
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
                                 
                             <img className = "edit_image"
                                         src = {Pontem3}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Pontem3)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>  
                            

                                <img className = "edit_image"
                                         src = {Pontem2}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Pontem2)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>  
                               

                                                   
                             </div>
 
                             </Cell>
 
                             
                     </Cell>
 
                     <Cell col={4}> 
                     <div style = {{textAlign: 'center', paddingRight: '3em', paddingTop: '2em'}}>
                        <h3 > Hacking for Defense </h3>
                        <h5 style={{borderBottom: '3px solid #010101'}}>Researcher/Prototype Engineer</h5>
                        "Hacking for Defense (H4D) is an education 
                        initiative that applies design thinking 
                        and the Lean Startup model to solve real 
                        and complex problems in the defense and 
                        intelligence communities. To do this, 
                        transdisciplinary student teams interview dozens of 
                        users and experts every week and 
                        constantly prototype solutions." 
                        Our problem statement was Soldiers 
                        on the battlefield need a way to 
                        quickly and accurately identify lab 
                        equipment to recognize Weapons of 
                        Mass Destruction (WMD) threats. 
                        Our goal is to assist the DTRA in 
                        improving the current system or find a 
                        new system to accurately identify WMDs. 
                        We conducted 40 interviews with military 
                        personals and industry experts within a single semester.
                        </div>  
 
                     </Cell>
                 </Grid>





            </div>


        )


    }


}

export default Project_8; 