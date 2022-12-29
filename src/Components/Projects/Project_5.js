import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import Bike_1 from './ProjectImages/Bike_1.PNG';
import Bike_2 from './ProjectImages/Bike_2.PNG';
import Bike_3 from './ProjectImages/Bike_3.PNG';
import Bike_4 from './ProjectImages/Bike_4.PNG';
import Bike_6 from './ProjectImages/Bike_6.PNG'; 
import Bike_10 from './ProjectImages/Bike_10.jpeg'



class Project_5 extends Component {


    render(){
        return(
            <div>
                   <Grid>
                    
                    <Cell col = {8}>
                        
                        <div style={{ paddingTop: '5em', color: 'Blue'}} >
                            <a href='https://www.kinsaleins.com/' target="_blank">Click here for company's site</a>
                        </div>
                        
                         <div style = {{ paddingTop: '2em', paddingTop: '20em'}}>No Images due to Copyrights</div> 
                     </Cell>
 
                     <Cell col={4}> 
                        <div style = {{textAlign: 'center', paddingRight: '3em', paddingTop: '2em'}}>
                            <h3 > Kinsale Insurance </h3>
                            
                            <h5 style={{borderBottom: '3px solid #010101'}}>Software Developer</h5>
                            I am currently employed at Kinsale Insurance as a Software Developer, 
                            and January 2023 will mark two years at Kinsale. 
                            I have learned a great deal from new technical skills to working in an agile environment. 
                            I have garnered experiences in Spring, Spring Boot, Angular, Angular JS, SQL, 
                            and multiple AWS services such as Cloud Formation, Lambads, and SQS, to name a few. 
                            I have had the opportunity to work both in Scrum and Kunban. 
                            I have mentored new developers, worked closely with QAs, BAs, DevOps, Data Architect, 
                            Product Owners/Managers and and End Users. I have experience working on production bugs, 
                            which involved finding and resolving issues in a very short timeframe and refactoring old code and 
                            developing new features.
                        </div>  
 
                     </Cell>
                 </Grid>





            </div>


        )


    }


}

export default Project_5; 