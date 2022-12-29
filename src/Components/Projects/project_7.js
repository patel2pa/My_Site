import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import ArcheMedX from "../components2.0/images/archemedx.png";


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
                         
            
                        <div style={{ paddingTop: '5em', color: 'Blue'}} >
                            <a href='https://www.archemedx.com/' target="_blank">Click here for company's site</a>
                        </div>
                        
                         <div style = {{ paddingTop: '2em', paddingTop: '20em'}}>No Images due to Copyrights</div> 
                             
                     </Cell>
 
                     <Cell col={4}> 
                        <div style = {{textAlign: 'center', paddingRight: '3em', paddingTop: '2em'}}>
                            <h3 > ArcheMedX, Inc</h3>
                            <h5 style={{borderBottom: '3px solid #010101'}}>Software Test Engineer Intern</h5>
                            Shortly after graduating from JMU,
                            I started working at ArcheMedX as a Software Test Engineer Intern.
                            At ArcheMedX, I delivered quality software to our clients.
                            I did through automation and manual testing.
                            I created automation scripts to automate repetitive tasks.
                            and carry out manual testing across multiple platforms.
                            At ArcheMedX, I picked up new skills such as
                            Manual testing, Automation test, along with new technologies
                            such as Cypress and TypeScript. I collaborate with developers
                            to set testing protocols and participate in standup meetings. 
                        </div>  
                     </Cell>
                 </Grid>
            </div>


        )


    }


}

export default Project_7; 