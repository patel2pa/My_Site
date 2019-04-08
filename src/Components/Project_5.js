import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import Bike_1 from '../Bike_1.PNG';
import Bike_2 from '../Bike_2.PNG';
import Bike_3 from '../Bike_3.PNG';
import Bike_4 from '../Bike_4.PNG';
import Bike_5 from '../Bike_5.PNG';
import Bike_6 from '../Bike_6.PNG'; 
import Bike_10 from '../Bike_10.jpeg'



class Project_5 extends Component {

    
        state = {
            imag: Bike_6
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
                                 style={{height: '500px', width: '755px' }}/>
                             <Cell col = {12}>
 
                             <div >
                             
                                <img 
                                         src = {Bike_10}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Bike_10)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer' }}/> 

                                <img className = "edit_image"
                                         src = {Bike_2}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Bike_2)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>  
                                <img className = "edit_image"
                                         src = {Bike_4}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Bike_4)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>  
                                <img className = "edit_image"
                                         src = {Bike_3}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Bike_3)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>  
                                <img className = "edit_image"
                                         src = {Bike_1}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Bike_1)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>

                                <img className = "edit_image"
                                         src = {Bike_6}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(Bike_6)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>                       
                             </div>
 
                             </Cell>
 
                             
                     </Cell>
 
                     <Cell col={4}> 
                     <div style = {{textAlign: 'center', paddingRight: '3em', paddingTop: '2em'}}>
                        <h3 > Human Powered Vehicle</h3>
                        <h5 style={{borderBottom: '3px solid #010101'}}>Researcher/Prototype Engineer</h5>
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

export default Project_5; 