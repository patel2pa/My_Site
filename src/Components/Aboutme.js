import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl'; 
import image from '../Parth_image.jpg'



class Aboutme extends Component {
    render(){
    

        
        return(
            <div>
 
             
                     <header className = "bg-splash-gray px3 py3 border-bottom border-light-gray">
                         <div className = "center">
                             <a  >
                                 <img className = "img" src ={image}  />
                             </a>
                             <div className = "clearfix" >
                                 <h3 class = "page-title">Welcome to my site</h3>
                                 
                                 <h3 class="page-title"> 
                                 My name is Parth Patel</h3>
                                 
                             </div>
                         </div>
                     </header>
 
                     <div className = "banner-text">
                             <h1>About me</h1>
                             <hr/>
                             <div>
                                 <p  className = 'Bio'>
                                 I am an undergraduate Engineering student with leadership experience 
                                 and an background from a project-based, human-centered, 
                                 and design-driven curriculum. I will graduate from James Madison University 
                                 in May of 2020 with a B.S. in Engineering with systems focus. I have various 
                                 experiences in project management, detailed systems analysis, customer interaction,
                                  troubleshooting, product testing and engineering design. My experiences give me a 
                                  hardworking and goal-oriented mindset nested in creative thinking. I aim to use my 
                                  ills and passions to collaboratively design sustainable solutions in the engineering 
                                  fields.  
                                  </p>
                                 <p>
                                 I am curious and competitive by nature and 
                                 i am fortunate to grow up in circumstances that have allowed me to learn. 
                                 As an earnest learner my natural habit have been to consume knowledge from multitude
                                  sources. I have learned from mixture of online tutorials, videos, books and 
                                  nversations with people.   
                                  </p>   
                                 </div>
                                 
 
                                 <div className = "social-links">
 
                                     
                                     <a href = "https://www.linkedin.com/in/parth-patel-692656178/" target = "_blank" rel = "nooperner noreferrer">
                                         <i className = "fa fa-linkedin-square"  aria-hidden="true"/>
                                     </a>
 
                                    
                                      <a href = "https://github.com/patel2pa" target = "_blank" rel = "nooperner noreferrer">
                                         <i className = "fa fa-github-square"  aria-hidden="true"/>
                                     </a>
 
 
                                 </div>
 
                         </div>
                 
                         <footer>
                                 <p>© 2019 Parth Patel</p>
                         </footer>
             </div>
 
 
         )

    
    }


}

export default Aboutme; 