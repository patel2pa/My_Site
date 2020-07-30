import React from "react";
import Header from "./Header"
import About from "./About"


class Main extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <About/>
            </div>
        )
    }

}

export default Main;