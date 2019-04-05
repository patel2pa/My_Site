import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import EE_1 from '../EE_1.PNG';
import EE_2 from '../EE_2.PNG';
import EE_3 from '../EE_3.PNG';
import EE_4 from '../EE_4.PNG';


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
                                 style={{height: '500px', width: '755px' }}/>
                             <Cell col = {12}>
 
                             <div >
                             
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
                        Utilizing the human centered process we designed 
                        and manufactured a custom bike for a young community 
                        member with cerebral palsy. As the building engineer I 
                        created engineering drawing s for custom parts, fabricated 
                        different prototypes and assembled the final design we decided on. 
                        This 2 semester long process was one of the most rewarding educational experiences. 
                        We were able to provide our client with beta prototype that cost less than $500 dollars. 
                        Our prototype was then taken by my peer to be finalized 
                        over the summer and for our client to receive his first bike. 
                        </div>  
 
                     </Cell>
                 </Grid>





            </div>


        )


    }


}

export default Project_3; 