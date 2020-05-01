import React from 'react';
import style from './Form.module.css'; 

const Form = (props) => {
    return (
        <div className={style.container}>
            <form 
            className={style.findlocation}
            onSubmit={props.handelFormSubmmit}>
                <input
                    type="text"
                    name="city"
                    placeholder="Enter city name..."
                />
                {/* <button>Get Weather</button> */}
                <input type="submit" value="Find"/>
            </form>
        </div>
    )
}

export default Form;
