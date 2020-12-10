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
    authorization:  `Bearer GET_YOUR_OWN_TOKEN`
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
