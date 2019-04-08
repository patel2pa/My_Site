import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl'; 
import image from '../Parth_image.jpg'



class Landingpage extends Component {
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
                                 I am an undergraduate student at James Madison University 
                                 majoring in software and system focused engineering (ABET accredited). 
                                 The past years of my study have been project-based, 
                                 what is learned in the classroom is applied to real-world via projects. 
                                 Projects such as analyzing multispectral data in 
                                 python or building a human-powered vehicle. 
                                 Through these comprehensive projects not only do 
                                 I get to develop skills in my respective discipline but 
                                 I also developed skills such as leadership, human-centered design, 
                                 and communication. 
                                 The program emphasizes solutions through the use of engineering design principles. 
                                 This is done by taking into account all aspects of the problem which range from economic, 
                                 societal to environmental by objectively analyzing 
                                 solution through the use of tools such as AHP(analytical hierarchy process),
                                 morphological matrix or functional point analysis. 
                                 This is followed by in-depth discussions with the clients, team members, 
                                 the advisors, and other stakeholders. 
                                 The program also emphasizes the role of engineers in 
                                 interdisciplinary projects through a sequence of classes 
                                 that teach project management, leadership and project structures.
                                        
                                  </p>
                                 <p>
                                 I am curious and competitive by nature and 
                                 I am fortunate to grow up in circumstances 
                                 that have allowed me to learn. As an earnest learner, 
                                 my natural habit has been to consume knowledge from a multitude of sources. 
                                 I have learned from a mixture of online tutorials, 
                                 videos, books and conversations with people. 
                                 When I am not doing school related work I like to 
                                 teach myself new skills whether that would be building 
                                 webs applications or designing an embedded system. 
                                 I always working on new projects such as this website (for source code <a href = "https://github.com/patel2pa/my_site" target = "_blank">click here</a>). 
                                  </p>   
                                 </div>
                                 
 
                                 <div className = "social-links">
                                                                         
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

export default Landingpage; 
