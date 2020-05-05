import React from 'react';
import style from './Weather.module.css';
import { NavLink } from "react-router-dom";
import windImg from '../image/wind.svg';
import compassImg from '../image/compass.svg';

const Weather = ({ temp, city, id, wind, onDelete }) => {
    return (
        <div className={style.forecastcontainer}>
            <label
                onClick={() => onDelete && onDelete(id)}
                className={style.closebtn}
            >&times;</label>
            <div className={style.location}>
                <NavLink to={`/weatherdetail/${city}`}>{city}</NavLink>
            </div>
            <div className={style.degree}>
                {temp}
                <sup>o</sup>
                C
            </div>
            <span><img src={windImg}/>{wind.speed}km/h</span>
            <span><img src={compassImg}/>{wind.deg}deg</span>
        </div>
    )
}


export default Weather;