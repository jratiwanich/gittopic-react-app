import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';
import { render } from '@testing-library/react';
import DisplayContent from "./components/display";


class App extends React.Component {

  state = { searchTerm: 'react', click: 0 };

  constructor() {
    super();
  }
  
  handleIncrement = key => {
    
   this.setState({ searchTerm: key });
    console.log("handleIncrement:",key,this.state.searchTerm);
  }

  handleClick=(e)=>{
    this.setState({ searchTerm: "sdfsdf" });
    console.log('render how 😡',e.target);
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
    console.debug("handleChange:",this.state, e.target.value);
  };

  render(){
    console.log('I render now 😡');
    return (
      
      <div>
        <SearchBar initSearch={this.state.searchTerm} onIncrement={this.handleIncrement}></SearchBar>
        <div className="jumbotron">
          <DisplayContent search={this.state.searchTerm}></DisplayContent>
          <hr className="my-4"></hr>
          <a href="https://www.linkedin.com/in/jakratiwanich/"><h5 className="float-right">by Jak Ratiwanich</h5></a>
        </div>
     
      </div>
    );
  }
}

export default App;
