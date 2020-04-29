import gql from 'graphql-tag';



export default gql` 
     query Weather($cityname:String) {
        getWeather(cityName:$cityname){ 
        city {
                id
                name
            }
	    list { 
         weather{
            id
            main
            description
            icon
            }  
        }  
    }
}
` 