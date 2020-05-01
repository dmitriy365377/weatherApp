import React from 'react';
import style from './App.module.css';

import Form from './components/Form';
import Weather from './components/Weather';

import GET_CURRENT_WEATHER from './queries/getCurrentWeather';
import { useLazyQuery } from "@apollo/react-hooks";


function App() {
  return (
    <View />
  );
}

function View() {
  const [setCurrentWeather, { data, error, loading }] = useLazyQuery(GET_CURRENT_WEATHER);

  const handelFormSubmmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    console.log(city)
    setCurrentWeather({
      variables: {
        cityname: city
      }
    });

  }

  console.log(data);


  return (
    <div>
      <Form  
      handelFormSubmmit={handelFormSubmmit} 
      />
      <Weather />
    </div>
  )
}

export default App;
