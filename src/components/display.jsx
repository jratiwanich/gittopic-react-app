import React, { Component } from "react";
import SearchResult from './searchResult';

class DisplayContent extends Component {

     constructor(props) {
      super(props);
      this.state = { searchTerm: this.getInit(this.props.search) };
    }

    getInit(data){
        //in case I need to debug or map the data in the future
        console.log("getInit",data);
        return data;
    }

    handleChange = (value) => {
        if(value!==this.state.searchTerm){
            this.setState({ searchTerm: value });
            console.debug("handleChange:", value,this.state.searchTerm);
        }

    };

    //Separate the body and the search result 
    render() { 
        return (
            <div>
                <h3 className="display-4" title="topic of search term">TOPIC: <span className="badge badge-secondary">{this.state.searchTerm}</span></h3>
                <SearchResult key={this.props.search} value={this.props.search} onChange={this.handleChange} ></SearchResult>
            </div>
        );
    }
}

export default DisplayContent;
