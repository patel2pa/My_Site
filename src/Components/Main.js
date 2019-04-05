import React from 'react'; 
import Landingpage from './Landingpage';
import { Switch, Route} from 'react-router-dom';
import Aboutme from './Aboutme';
import Contact from './Contact'; 
import Project from './Project';
import Resume from './Resume';


const Main = () =>(
<Switch>
    <Route exact path="/" component = {Landingpage}/>
    <Route exact path="/aboutme" component = {Aboutme}/>
    <Route exact path="/contact" component = {Contact}/>
    <Route exact path="/projects" component = {Project}/>
    <Route exact path="/resume" component = {Resume}/>
</Switch>

)
export default Main; 