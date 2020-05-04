import React, { useEffect } from 'react';
import style from '../components/WeatherDetail.module.css';

import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Loading from '../loader/Loading';

import { graphql } from '../lib/gql';
import GET_DETAIL_WEATHER from '../queries/getDetailWeather';

const WeatherDetail = () => {
    const params = useParams();
    let loading = false;
    let error = null;

    useEffect(() => {
        const cityname = params.city;
        console.log(cityname)
        async function detaildata(cityname) {
            const { data, error } = await graphql(GET_DETAIL_WEATHER, { cityname });
            console.log(data)
        }
        detaildata(cityname)
    }, []);



    if (error) return <p>Error :(</p>;
    if (loading) {
        return (<div className={style.loader}><Loading /></div>)
    };

    return (
        <div>
            <NavLink to="/">Back</NavLink>
            <h3>Weather Detail</h3>
        </div>
    );
}


export default WeatherDetail;