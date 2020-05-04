import React from 'react';
import style from './Form.module.css';
import DataLoading from '../loader/Loading';

const Form = ({ handelFormSubmmit, loading }) => {
    return (
        <div className={style.container}>
            <form
                className={style.findlocation}
                onSubmit={handelFormSubmmit}>
                <input
                    type="text"
                    name="city"
                    placeholder="Enter city name..."
                />
                {!loading && <input type="submit" value="Find" />}
                {loading && <div className={style.loader}><DataLoading /></div>}
            </form>
        </div>
    )
}

export default Form;
