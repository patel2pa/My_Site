import React from 'react';
import Nav from "./Components/components2.0/Nav";
import Main from "./Components/components2.0/Main";
import Projects from "./Components/Projects/Project";
import Education from "./Components/components2.0/education";
import Contact from "./Components/components2.0/contact";
import { Route, BrowserRouter as Router, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

//https://stackoverflow.com/questions/43985376/how-to-organise-components-for-a-single-page-scrolling-website-in-react

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Route path = '/' exact component={Main}/>
        <Route path = '/experience' component={Projects}/>
        <Route path = '/education' component={Education}/>
        <Route path = '/contact' component={Contact}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
