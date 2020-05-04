import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "mobx-react";
import { WeatherStore } from './store/WeatherStore';


import WeatherDetail from './components/WeatherDetail'; 

ReactDOM.render(
  <Provider WeatherStore={WeatherStore}>
    <BrowserRouter >
      <Route exact path="/">
        <App />
      </Route>
      <Route path='/weatherdetail/:city' component={WeatherDetail} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();