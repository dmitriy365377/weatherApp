export default ` 
    query Weather($cityname:String) {
        getWeather(cityName:$cityname){ 
            list { 
			    main { 
                    temp_c
                }
             weather{
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
 