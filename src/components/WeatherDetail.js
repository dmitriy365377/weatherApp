import React from 'react';
import style from '../components/WeatherDetail.module.css'
import { useQuery } from '@apollo/react-hooks';
import GET_DETAIL_WEATHER from '../queries/getDetailWeather';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Loading from '../loader/Loading';

const WeatherDetail = () => {
    const params = useParams();

    const { loading, error, data } = useQuery(GET_DETAIL_WEATHER, {
        variables: {
            cityname: params.city
        },
    });

    if (error) return <p>Error :(</p>;
    if (loading) {
        return (<div className={style.loader}><Loading /></div>)
    };

    console.log('data', data)

    return (
        <div>
            <NavLink to="/">Back</NavLink>
            <h3>Weather Detail</h3>
        </div>
    );
}


export default WeatherDetail;