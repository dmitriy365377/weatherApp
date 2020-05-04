export default ` 
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