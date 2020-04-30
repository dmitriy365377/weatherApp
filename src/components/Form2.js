import React, { useState } from 'react';


const Form = (props) => {
    const [city,getCity] = useState('');

    const getCityValue = (e) => {
        getCity(e.target.value)
    }


    const setCity = () => {
        getCity('')
    } 


    return (
        <React.Fragment>
            <div>
                <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => getCityValue(e)}
                    placeholder="Enter city name..." />
            </div>
            <div>
                <button
                    onClick={setCity}
                >Get Weather</button>
            </div>
        </React.Fragment>
    )
}

export default Form;
