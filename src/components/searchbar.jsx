import React, { PropTypes } from "react";

// Stateless Functional Component

//const SearchBar = ({ searchTerm }) => {
class SearchBar extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = { searchTerm: this.getInit(this.props.initSearch) };
    }

    getInit(data){
      console.log("getInit",data);
      return data;
    }
    handleChange = (e) => {
      this.setState({ searchTerm: e.target.value });
      console.debug("handleChange:",this.state, e.target.value);
    };

    render() {
      //this.setState({searchTerm: this.search})
      return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">Github GraphQL Demo {this.props.init}</div>
            <div className="form-inline">
            <input  
              value={this.state.searchTerm}
              onChange={this.handleChange}
              className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" 
                onClick={() => this.props.onIncrement(this.state.searchTerm)}
            >Search</button>
            </div>
        </nav>
      );
    }
};

export default SearchBar;
