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
  
  handleSearchChange = key => {
    //update the search term when user type in the search bar
    this.setState({ searchTerm: key });
    console.log("handleSearchChange:",key,this.state.searchTerm);
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
    console.debug("handleChange:",this.state, e.target.value);
  };

  render(){
    //check to see if react will re-render
    console.log('I render now 😡');
    return (
      
      <div>
        <SearchBar initSearch={this.state.searchTerm} onSearchChange={this.handleSearchChange}></SearchBar>
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
