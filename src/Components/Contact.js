import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent  } from 'react-mdl'; 
import './Contact.css'; 
import Image from '../Parth_image.jpg'


class Contact extends Component {
    render(){
        return(
        
        <div className="wrapper">
            <div className="container">
              <img src={Image} alt="" className="profile-img"/>
              
              <div className="content">

                <div className="sub-content">
                  <h1>Parthkumar A Patel</h1>
                  <span>Contect information</span>
                  <p>Patel2pa.arvind@gmail.com</p>                  
                  <a >www.parth-patel.netlify.com</a>
                  
                </div>

                <div className="data">
                  <div className="inner-data">
                    <a href = "https://github.com/patel2pa" target = "_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                    <p>github</p>
                  </div>
                  
                  <div className="inner-data">
                    <a href = "https://www.linkedin.com/in/parth-patel-692656178/" target = "_blank"> <i className="fa fa-linkedin-square" aria-hidden="true"></i> </a>
                    <p>linkedin</p>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
                        


        )


    }


}

export default Contact; 