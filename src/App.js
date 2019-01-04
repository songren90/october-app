import React, { Component } from 'react';
import './App.css';
import {Currency, Options, CentreBox} from './CurrencyCon.js';
import {Sidebar} from "./Sidebar.js";


class App extends Component {
  constructor (props){
    super(props);
    this.state ={
      showColor: "false",
      value:5
    }
    
  }


  render() {
  
    return (
      <div className="container">
      <header>
      <Currency/>
      </header>
      <aside>
      <Options/>
      </aside>
      <main>
      <CentreBox/>
      </main>
      <footer>
        <div style={{textAlign:"center"}}>
        <a href="https://reactjs.org">
          Learn React and other things here
        </a>
        </div>
      </footer>
      <space>
      <Sidebar/>
      </space>
        
      </div>
    );
  }
}

export default App;
