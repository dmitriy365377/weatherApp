import React,{useRef} from 'react';

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
  const [setCurrentWeather, {loading, data}] = useLazyQuery(GET_CURRENT_WEATHER);
  const childRef = useRef();

  const handelFormSubmmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    setCurrentWeather({
      variables: {
        cityname: city
      }
    });  
    console.log(setCurrentWeather)
    return childRef.current.addItem() 
  }   
 
  return (
    <div>
      <Form
        handelFormSubmmit={handelFormSubmmit}
      />
      <Weather
      ref={childRef} 
      data={data} 
      loading={loading} />
    </div>
  )
}

export default App;


