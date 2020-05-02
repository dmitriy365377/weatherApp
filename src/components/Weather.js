import React from 'react';
import style from './Weather.module.css';
import { NavLink } from "react-router-dom";

const Weather = ({ temp, city, id, onDelete }) => {
    return (
        <div className={style.forecastcontainer}>
            <label
                onClick={() => onDelete && onDelete(id)}
                className={style.closebtn}
            >&times;</label> 
            <div className={style.location}>
                <NavLink  to={`/weatherdetail/${city}`}>{city}</NavLink>
            </div>
            <div className={style.degree}>
                {temp}
                <sup>o</sup>
                C
            </div>
        </div>
    )
}


export default Weather;