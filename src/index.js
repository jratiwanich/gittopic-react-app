import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.css";
import { InMemoryCache, ApolloClient, ApolloProvider} from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers:{
    authorization:  `Bearer 61bbe97c9c24d2bf4f05f617c986eadf7c18d8e3`//hardcoded for now, so other can test - will be removed after coding test
  }
});


ReactDOM.render(

    <ApolloProvider client={client}>
        <React.StrictMode><App /></React.StrictMode>    
    </ApolloProvider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
