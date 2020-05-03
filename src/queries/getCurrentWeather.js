import gql from 'graphql-tag'; 

export default gql` 
    query Weather($cityname:String) { 
        getCurrentWeather(cityName: $cityname) {
        main { 
            temp_c
        }
        name
        id
    }
} 
` 