import React, { useState, useEffect } from 'react'; 
import Form from './components/Form';
import Weather from './components/Weather';

import GET_CURRENT_WEATHER from './queries/getCurrentWeather';
import { useLazyQuery } from "@apollo/react-hooks"; 

function App(props) {
  const [setCurrentWeather, { data }] = useLazyQuery(GET_CURRENT_WEATHER, { fetchPolicy: 'network-only' });
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data) {
      const newItem = {
        temp: data.getCurrentWeather.main.temp_c,
        city: data.getWeather.city.name,
        id: data.getWeather.city.id
      }
      setItems((prev) => [...prev, newItem]);
    }
  }, [data])

  const handelFormSubmmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value; 
    setCurrentWeather({
      variables: {
        cityname: city
      }
    }); 
  }
  
  const handleDeleteItem = (deleteId) => {
    setItems((prev) => prev.filter(({ id }) => id !== deleteId));
  } 
  
  return (
    <div>
      <Form
        handelFormSubmmit={handelFormSubmmit}
      />
      {
        items.map(({ temp, city, id }) => (<>
          <Weather
            id={id}
            key={id}
            temp={temp}
            city={city}
            onDelete={handleDeleteItem} />
        </>))
      }
    </div>
  )
} 

export default  App; 

 