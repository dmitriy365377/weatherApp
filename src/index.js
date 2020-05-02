import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import WeatherDetail from './components/WeatherDetail';

const client = new ApolloClient({
  uri: "https://7b3u2.sse.codesandbox.io/",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter >
    <Route exact path="/">
        <App />
      </Route>
      <Route path='/weatherdetail/:city' component={WeatherDetail} />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
); 
 
serviceWorker.unregister();
