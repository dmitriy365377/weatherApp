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

    return (<div className={style.card}>
        <h3>{state.getWeather && `${state.getWeather.city.name} Weather`}</h3>
        <dd> <NavLink to="/">Back</NavLink></dd> 
        <dd>
            <div className={style.date}>  
                <strong>{'Today is ' + format(new Date(), 'd MMM')}</strong>
            </div>
            <table className={style.weathertoday}>
                <thead>
                    <tr className={style.headers}>
                        <th><div>Time</div></th>
                        <th><div>Temperature</div></th>
                        <th><div>Atmospheric phenomena</div></th>
                        <th><div>Description</div></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.getWeather && state.getWeather.list
                            .filter((item, idx) => idx < 24)
                            .map((item, id) => (
                                <tr key={id} className={style.text}>
                                    {console.log(id)}
                                    <td>{`${id}:00`}</td>
                                    <td>{item.main.temp_c}</td>
                                    <td>{item.weather[0].main}</td>
                                    <td>{item.weather[0].description}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table> 

            <div className={style.date}>
                <strong>Next day</strong>
            </div>
            <table className={style.weathertoday}>
                <thead>
                    <tr className={style.headers}>
                        <th><div>Time</div></th>
                        <th><div>Temperature</div></th>
                        <th><div>Atmospheric phenomena</div></th>
                        <th><div>Description</div></th>
                    </tr>
                </thead>
                <tbody>
                    {state.getWeather && state.getWeather.list
                        .filter((item, idx) => idx > 23)
                        .map((item, id) => (
                            <tr key={id} className={style.text}>
                                {console.log(id)}
                                <td>{`${id}:00`}</td>
                                <td>{item.main.temp_c}</td>
                                <td>{item.weather[0].main}</td>
                                <td>{item.weather[0].description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </dd>
    </div>
    );
}

export default WeatherDetail;