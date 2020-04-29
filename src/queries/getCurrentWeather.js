import gql from 'graphql-tag'; 

export default gql` 
     query Weather($cityname:String) {
        getWeather(cityName:$cityname){ 
 	   city{
        id
        name
        }
    }  
    getCurrentWeather(cityName: $cityname) {
        main { 
            temp_c
        }
    }
}
` 