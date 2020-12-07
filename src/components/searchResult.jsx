import React, { useState } from "react";
import { gql, useQuery } from '@apollo/client';


const GET_GIT_TOPICS = gql`
  query SearchTopics($search: String!) {
    search(query: $search, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            stargazers {
              totalCount
            }
            resourcePath
            repositoryTopics(first: 10) {
              totalCount
              nodes {
                topic {
                  name
                  stargazerCount
                  relatedTopics {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;


  function SearchResult(props) {

    // function handleChange(event) {
    //   // Here, we invoke the callback with the new value
    //   props.onChange(event.target.value);
    // }
    let searchTerm = props.value;
    const [newTopic, setTopic] = useState(searchTerm);
    let search;
    if(searchTerm===newTopic){
      search = `${searchTerm} stars:>10000`;
    }else{
      search = `${newTopic} stars:>10000`;
      searchTerm = newTopic;
      props.onChange(newTopic);
      updateSearchTerm(newTopic);
    }
    console.debug("search",search,newTopic);
    const { loading, error, data } = useQuery(GET_GIT_TOPICS,
      {
        variables: { search}
      });
  
    if (loading){ 
      return (
        <div>
          <i className="fas fa-sync fa-spin" aria-hidden="true"></i>
          ...Searching for {search}
        </div>
      );
    }
    if (error) return `Error! ${error.message}`;
  
    console.debug("RESULT:",data);
    return (
      <React.Fragment>
        {data && data.search.edges &&  data.search.edges.map((edge, index) => (
          <ul className="list-group"  key={index}>
            <li className="list-group-item">
              <div className="d-flex justify-content-between">
                <h5>{edge.node.resourcePath}</h5>
                <span className="badge badge-success badge-pill badge-star"><i className="fa fa-star mr-2" aria-hidden="true" />{edge.node.stargazers.totalCount}</span>
              </div>
              <div>
                Related Topics:
                {edge.node.repositoryTopics.nodes.map((node,j)=>(
                  <button key={j}
                    onClick={() => setTopic(node.topic.name)}
                  type="button" className="btn btn-outline-info btn-sm mx-1 my-1">{node.topic.name}  <span className="badge badge-light badge-pill"><i className="fa fa-star m1-2" aria-hidden="true" />{node.topic.stargazerCount}</span></button>
                   ))}
              </div>
            </li>
          </ul>
        ))}
      </React.Fragment>
    );
  }

 function updateSearchTerm(data){
   
    console.debug("updateSearchTerm",data);
  }

export default SearchResult;