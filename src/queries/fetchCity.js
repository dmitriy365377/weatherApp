import gql from 'graphql-tag';



export default gql` 
    query getWeather($cityName: String) {
    city{
        id
        name
    }
	list { 
        weather {
           id
           main
           description
           icon
        }  
    }  
}
` 