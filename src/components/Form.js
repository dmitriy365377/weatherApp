import React from 'react';
import fetchCity from '../queries/fetchCity'; 
import { useQuery } from "@apollo/react-hooks";

const Form = () => {
    return (
         <form>
             <input type="text" name="city" placeholder="Enter city name..." />
             <button>Get Weather</button>
         </form>
    )
}

export default Form;
