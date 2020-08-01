import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import bear3 from "./ProjectImages/bear1.PNG";
import bear2 from "./ProjectImages/bear2.PNG";
import bear1 from "./ProjectImages/bear3.PNG";
import bear4 from "./ProjectImages/bear4.PNG";


class Project_6 extends Component {

    
        state = {
            imag: bear1
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
                                         src = {bear1}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(bear1)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer' }}/> 

                                <img className = "edit_image"
                                         src = {bear2}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(bear2)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>  
                                <img className = "edit_image"
                                         src = {bear3}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(bear3)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>  
                                <img className = "edit_image"
                                         src = {bear4}
                                         alt = "avatar"
                                         onClick = {() => this.onClickEvent(bear4)}
                                         onmouseover=""
                                         style={{height: '50px', cursor: 'pointer'}}/>  
                                                   
                             </div>
 
                             </Cell>
 
                             
                     </Cell>
 
                     <Cell col={4}> 
                     <div style = {{textAlign: 'center', paddingRight: '3em', paddingTop: '2em'}}>
                        <h3 > Bearable  </h3>
                        <h5 style={{borderBottom: '3px solid #010101'}}>Scrum Developer</h5>
                        Bearable was a multidisciplinary project t
                        o provide tools to the scientists, ecologies, 
                        and experts to study bear behavior. 
                        I worked with Biology, Industrial Design, ISAT, 
                        and Communication students to design and build an IoT system, 
                        wrote a Machine Learning algorithm 
                        in Python and web app in Javascript, 
                        conducted interviews with experts, and presented out final work. 
                        Out final solution consisted of IoT devices,  
                        Bear collar, remote communication via Iridium 
                        satellite, Backend data storage system, 
                        Frontend UI built with React JS, and pattern detection algorithm.    
                        Working in a multidisciplinary team allowed me 
                        to learn skills such as communication. 
                        To visit the project's official site 
                        <a href = "https://sites.lib.jmu.edu/iotspring2020/bearable/"> click here</a>     
                        </div>  
 
                     </Cell>
                 </Grid>





            </div>


        )


    }


}

export default Project_6; 