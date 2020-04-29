import React from 'react';


const Form = (props) => { 
    return (
        <form onSubmit={props.getCurrentWeather}>
            <input type="text" name="city" placeholder="Enter city name..." />
            <button>Get Weather</button>
        </form> 
    )
}

export default Form;
