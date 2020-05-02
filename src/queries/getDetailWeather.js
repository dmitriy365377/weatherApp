import gql from 'graphql-tag';

export default gql` 
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
        id
        name
        timezone
        } 
    }   
}
`