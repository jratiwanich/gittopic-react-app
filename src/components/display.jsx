import React, { Component } from "react";
import SearchResult from './searchResult';

class DisplayContent extends Component {

  handleChange = (value) => {
    //this.setState({ searchTerm: e.target.value });
    console.debug("handleChange:", value);
    //this.props.search = value;
  };

    render() { 
        return (
            <div>
                <h3 className="display-4">TOPIC: <span className="badge badge-secondary">{this.props.search}</span></h3>
                <SearchResult key={this.props.search} value={this.props.search} onChange={this.handleChange} ></SearchResult>
            </div>
        );
    }
}

export default DisplayContent;
