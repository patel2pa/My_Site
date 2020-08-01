import React from "react";
import "./projects.css";

class Project extends React.Component {

        state = {activeTab: 0};


    toggleCategories = () => {

    if(this.state.activeTab === 0){
        return(
            
            <div className = "projects-grids"> 
            <div>
                test
            </div>   
            <div>
                test
            </div> 
            <div>
                test
            </div>                 
            </div>
        )
    }


    else if(this.state.activeTab === 1){
        return(
            <div >
                test1
            </div>
        )
    }
    
}

    toggleButton = () => {
        if(this.state.activeTab === 0){
            return(
            <div className = "projectButtons">
                <button className = "button1" onClick = {()=>{this.setState({activeTab:0})}} >Mini Projects</button>
                <button className = "button2" onClick = {()=>{this.setState({activeTab:1})}}>Comprehensive Projects</button>
            </div>

            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className = "projectButtons">
                    <button className = "button2" onClick = {()=>{this.setState({activeTab:0})}} >Mini Projects</button>
                    <button className = "button1" onClick = {()=>{this.setState({activeTab:1})}}>Comprehensive Projects</button>
                </div>
            )
        }
    }


    render(){
        return(
            <div>
           {this.toggleButton()}
                    
            {this.toggleCategories()}
                    
                    
                
            </div>


        )


    }


}

export default Project; 