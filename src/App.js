import React from 'react';
import './App.css'; 
import { ApolloProvider} from "@apollo/react-hooks";
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
      <Form />
      <Weather />
    </div>
  )
}



export default App;
