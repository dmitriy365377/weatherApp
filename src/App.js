import React from 'react';
import './App.css';
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from './apolloClient';

import Form from './components/Form';
import Weather from './components/Weather';


import GET_CURRENT_WEATHER from './queries/getCurrentWeather';
import { useLazyQuery } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <View />
    </ApolloProvider>
  );
}


function View() {
  const [getCurrentWeather, { data, error, loading }] = useLazyQuery(GET_CURRENT_WEATHER);

  
  return (
    <div>
      <Form getCurrentWeather={getCurrentWeather}/>
      <Weather />
    </div>
  )
}



export default App;
