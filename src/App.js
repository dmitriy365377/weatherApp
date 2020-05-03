import React, { useEffect } from 'react';
import Form from './components/Form';
// import Weather from './components/Weather';

// import GET_CURRENT_WEATHER from './queries/getCurrentWeather';
// import { useLazyQuery } from "@apollo/react-hooks";

import { observer, inject } from 'mobx-react';
// import store from './store'


const App = (props) => {
   
  // const {weatherData} = store; 
  // useEffect(()=>{
  //   props.WeatherStore.loadWeather("Novosibirsk"); 
  // })

  const handelFormSubmmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value; 
    props.WeatherStore.loadWeather("Novosibirsk"); 
  }

  const handleDeleteItem = (deleteId) => {
    // setItems((prev) => prev.filter(({ id }) => id !== deleteId));
  }

  return (
    <div>
      <Form
        handelFormSubmmit={handelFormSubmmit}
      />
      {
        // items.map(({ temp, city, id }) => (<>
        //   <Weather
        //     id={id}
        //     key={id}
        //     temp={temp}
        //     city={city}
        //     onDelete={handleDeleteItem} />
        // </>))
      }
    </div>
  )
};

export default inject("WeatherStore")(observer(App));


// const App = observer((props) => {
//   const [setCurrentWeather, { data }] = useLazyQuery(GET_CURRENT_WEATHER, { fetchPolicy: 'network-only' });
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     if (data) {
//       const newItem = {
//         temp: data.getCurrentWeather.main.temp_c,
//         city: data.getCurrentWeather.name,
//         id: data.getCurrentWeather.id
//       }
//       setItems((prev) => [...prev, newItem]);
//     }
//   }, [data])

//   const handelFormSubmmit = (e) => {
//     e.preventDefault();
//     const city = e.target.elements.city.value;
//     setCurrentWeather({
//       variables: {
//         cityname: city
//       }
//     });
//   }

//   const handleDeleteItem = (deleteId) => {
//     setItems((prev) => prev.filter(({ id }) => id !== deleteId));
//   }

//   return (
//     <div>
//       <Form
//         handelFormSubmmit={handelFormSubmmit}
//       />
//       {
//         items.map(({ temp, city, id }) => (<>
//           <Weather
//             id={id}
//             key={id}
//             temp={temp}
//             city={city}
//             onDelete={handleDeleteItem} />
//         </>))
//       }
//     </div>
//   )
// })

// export default App; 
