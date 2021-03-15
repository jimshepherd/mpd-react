import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import Routes from './routes/Routes';


const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


const App = () => {

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes/>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
