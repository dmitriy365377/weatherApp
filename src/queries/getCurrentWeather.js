export default ` 
    query Weather($cityname:String) { 
        getCurrentWeather(cityName: $cityname) {
        main { 
            temp_c
        }
        wind{
            speed
            deg
        }
        name
        id
    }
}
` 