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

export default Project_5; 