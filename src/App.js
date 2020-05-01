import React, { useState, useEffect } from 'react';

import Form from './components/Form';
import WeatherTest from './components/Weather';

import GET_CURRENT_WEATHER from './queries/getCurrentWeather';
import { useLazyQuery } from "@apollo/react-hooks";


function App() {
  return (
    <TestView />
    // <View />
  );
}
 
function TestView() {
  const [setCurrentWeather, { loading, called, data }] = useLazyQuery(GET_CURRENT_WEATHER, { fetchPolicy: 'network-only' });
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
          <WeatherTest
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


export default App;


// function View() {
//   const [setCurrentWeather, {loading, data}] = useLazyQuery(GET_CURRENT_WEATHER);
//   const childRef = useRef();

//   const handelFormSubmmit = (e) => {
//     e.preventDefault();
//     const city = e.target.elements.city.value;

//     setCurrentWeather({
//       variables: {
//         cityname: city
//       }
//     });  
//     console.log(setCurrentWeather)
//     return childRef.current.addItem() 
//   }   
 
//   return (
//     <div>
//       <Form
//         handelFormSubmmit={handelFormSubmmit}
//       />
//       <Weather
//       ref={childRef} 
//       data={data} 
//       loading={loading} />
//     </div>
//   )
// }



