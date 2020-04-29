import React from 'react';
import './App.css';
import fetchCity from './queries/fetchCity'; 
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import apolloClient from './apolloClient';

import Form from './components/Form';
import Weather from './components/Weather';
 
function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <View />
    </ApolloProvider>
  );
}


function View() {
  return (
    <div>
      Hello
      <Form />
      <Weather />
    </div>
  )
}



export default App;
