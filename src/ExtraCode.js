import React, {Component} from 'react';
import './ExtraCode.css';


// render() {


//     return(
//       <img style ={{border: this.state.border, height:"15vmin"}}onMouseEnter= {this.enterMethod} onMouseLeave={this.leaveMethod} 
//       src={this.props.passer} alt="one"></img>
//     )
//   }
// }


export class SomeText extends Component{
    constructor(props){
        super(props);
        this.state={
            number: 55
        }
    }
    render() {
        return (
            <div>This is a number: {this.state.number} </div>
        )
    }
}


export class ArtistsComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            number: 55
        }
    }
    render() {
        return (
            <div>This is NOT a number: 'https://tinyurl.com/y8alcyjk' </div>
        )
    }
}


export class ArtistsImg extends Component{
    constructor(props){
      super(props);
      this.state ={
       showColor: "false",
       border: "10px solid blue",
       value: 0
   
     }
     this.enterMethod = this.enterMethod.bind(this);
     this.leaveMethod = this.leaveMethod.bind(this);
     this.nextProperty=this.nextProperty.bind(this);
     this.previousProperty=this.previousProperty.bind(this);
   }
   
   enterMethod() {
     this.setState({
       showColor: "true",
       border: "20px solid green"
     })}
     
   leaveMethod() {
       this.setState({
         showColor: "false",
         border: "10px solid blue"
       })
    }
    

  nextProperty(){
    this.setState({
      value:7
    })
  }

  previousProperty(){
    this.setState({
      value:8
    })
  

   }
   render() {
    let aa = "2250";

    return (
        <div className="New-box">
        <h2>School boi!!!</h2>
        <header  className="New-header">
        <h2>Pix</h2>
        <img className="Images" src="https://tinyurl.com/y8alcyjk" alt="artist one" /> 
        <img className="Images" src="https://tinyurl.com/y9b2rssz" alt="Art-de Whill"/>
        <img className="Images" src ="https://tinyurl.com/ybnj7qgl" alt="Joa Rosa"/>
        <img className="Images" src ="https://tinyurl.com/yck8a57t"  alt="alistark91"/>
        <img className="Images" src="https://tinyurl.com/y8zb2r9g"  alt="greegw"/>
        <img className="Images" src="https://tinyurl.com/y96af595"  alt="pawelgladkow"/>        
        </header>
        </div>

  )
    }
}

export class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            number: 55
        }
    }
    render() {
        return (
            <div>This is NOT a number: 'https://tinyurl.com/y8alcyjk' </div>
        )
    }
}