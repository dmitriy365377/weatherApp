export default ` 
    query Weather($cityname:String) {
        getWeather(cityName:$cityname){ 
            list { 
			    main { 
                    temp_c
                }
             weather{
                id
                main
                description 
            }
        }
 	   city { 
            name  
        } 
    }   
}
` 
 