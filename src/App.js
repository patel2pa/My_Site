import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main'
import { Link } from 'react-router-dom';
import './App.css'


class App extends Component {
render(){

  return (

    <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title={<Link style = {{textDecoration: 'none', color: 'white'}} to = "/">Portfolio</Link>} scroll>
            <Navigation>
                
                
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>

        </Header>
        
        <Drawer className = "header-color" title={<Link style = {{textDecoration: 'none', color: 'gray'}} to = "/">Portfolio</Link>}>
            <Navigation>
                
                
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  

  )


}

}

export default App