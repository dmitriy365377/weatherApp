import React from 'react';
import style from './Weather.module.css';

const WeatherTest = ({ temp, city, id, onDelete }) => {
    return (
        <div className={style.forecastcontainer}>
            <label
                onClick={() => onDelete && onDelete(id)}
                className={style.closebtn}>&times;</label>
            <div className={style.location}>{city}</div>
            <div className={style.degree}>
                {temp}
                <sup>o</sup>
                C
            </div>
        </div>
    )
}


export default WeatherTest;


 // import React, { forwardRef, useImperativeHandle, useState,useEffect } from 'react';
// const Weather = forwardRef((props, ref) => {
//     const [state, setState] = useState({ weatherData: [] });
//     if (props.loading) return <p>Loading ...</p>;

//     if (props.data && props.data.getCurrentWeather) {
//         console.log(props.data.getCurrentWeather);
//     } 

//     // useImperativeHandle(ref, () => {
//     //     useEffect(() => {

//     //     })
//     // });
//     // addItem() {
//     //     console.log('привет я оттуда');

//     //     const newItem = {
//     //         temp: props.data.getCurrentWeather.main.temp_c,
//     //         city: props.data.getWeather.city.name,
//     //         id: props.data.getWeather.city.id    
//     //     }

//     //     setState(({ weatherData }) => {
//     //         const newArray = [
//     //             ...weatherData,
//     //             newItem
//     //         ];

//     //         return {
//     //             weatherData: newArray
//     //         }
//     //     })
//     // } 
//     // useImperativeHandle(ref, () => ({

//     // }));

//     return (
//         <div>
//             Weather Component
//         </div>
//     )
// });

