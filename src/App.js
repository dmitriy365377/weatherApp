import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import { observer, inject } from 'mobx-react';


function App(props) {
  const handelFormSubmmit = async (e) => {
    e.preventDefault();
    const cityname = e.target.elements.city.value;
    props.WeatherStore.loadWeather(cityname);
  }

  const { weatherData, loading, deleteWeather } = props.WeatherStore;

  return (
    <div>
      <Form
        handelFormSubmmit={handelFormSubmmit}
        loading={loading}
      />
      {
        weatherData.map(({ temp, city, id }) => (
          <Weather
            id={id}
            key={id}
            temp={temp}
            city={city}
            onDelete={deleteWeather} />
        ))
      }
    </div>
  )
}

export default inject("WeatherStore")(observer(App));

