import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ArtistsImg, SomeText, ArtistsComponent,Login} from "./ExtraCode.js";
import {Sidebar} from "./Sidebar.js";


export class Currency extends Component {
  constructor (props){
    super(props);
    this.state ={
      showColor: "false",
      value:5
    }
    this.toggleAppear=this.toggleAppear.bind(this);

  }
    
  toggleAppear(){
    this.setState({
      value: 1
    })
  }


render(){
    return(

        <div style={{border:"solid green 20px"}}>Hi</div>
    )
}


}

  export class Options extends Component{
    constructor(props){
      super(props);
      this.state ={
       showColor: "false"
   
     }
    }


  render() {
    
    return (
      <div className="New-header" style={{border:"solid yellow 20px"}}>
        <h1>Hey there</h1>
        <Router>
        <div>
        
        <ul style={{textAlign:"left"}}>
        <li>
        <Link to = "/Home">Home</Link>
        </li>
        <li>
        <Link to = "/Login">Login</Link>
        </li>
        <li>
        <Link to = "/">Back</Link>
        </li>
        <li>
        <Link to = "/Artists">Artists</Link>
        </li>
        <li>
        <Link to = "/ArtistsImg">ArtistsImg</Link>
        </li>
        </ul>
        <Route path="/Home" render={() => <div>Home</div>} />
        <Route path="/Login" component={Login}/>
        <Route path="/Artists" component={ArtistsComponent} />
        <Route path="/ArtistsImg" component={ArtistsImg} />
        </div>


        </Router>
      </div>
    );
  }
}


  function Home() {
      return(
        <SomeText></SomeText>
      )
}

export class CentreBox extends Component{
    constructor(props){
        super(props);
        this.state ={
         showColor: "false"
     
       }
      }
  
  
    render() {
      
      return (
        <div className="New-header" style={{border:"solid blue 20px"}}>
          <h2>Centre Box</h2>
          <Router>
          
          </Router>
        </div>
      );
    }
  }