export default ` 
    query Weather($cityname:String) {
        getWeather(cityName:$cityname){ 
            list {
                dt 
			    main { 
                    temp_c
                }
             weather{
                id
                main
                description
                icon
            }
        }
 	   city { 
        name  
        } 
    }   
}
` 
 