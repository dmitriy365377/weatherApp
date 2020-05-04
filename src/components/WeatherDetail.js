import React, { useEffect, useState } from 'react';
import style from '../components/WeatherDetail.module.css';

import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Loading from '../loader/Loading';

import { graphql } from '../lib/gql';
import GET_DETAIL_WEATHER from '../queries/getDetailWeather';

import { format } from 'date-fns';



const WeatherDetail = () => {
    const [state, setState] = useState([])
    const params = useParams();
    const cityname = params.city;
    let loading = false;
    let error = null;

    useEffect(() => {
        async function detaildata(cityname) {
            const { data, error } = await graphql(GET_DETAIL_WEATHER, { cityname });
            setState(data);
        }
        detaildata(cityname)
    }, []);



    if (error) return <p>Error :(</p>;
    if (loading) {
        return (<div className={style.loader}><Loading /></div>)
    };

    console.log(state)


    return (<div>
        <div>{state.getWeather && `${state.getWeather.city.name} Weather`}</div>
        <div>{'Today is ' + format(new Date(), 'd MMM')}</div>
        <NavLink to="/">Back</NavLink>
        <h3>Weather Detail</h3>
    </div>
    );
}


export default WeatherDetail;