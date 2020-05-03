import { observable, computed, configure, action, decorate, runInAction } from 'mobx';
configure({ enforceActions: 'observed' })


// const endPointURL = "https://7b3u2.sse.codesandbox.io/";

class Store {

    weatherData = [];

    loadWeather(city) {
        fetch("http://localhost:9000/graphql", {
            method: 'POST',
            headers: { 'content-type': 'aplication/json' },
            body: JSON.stringify({
                query: `query Weather($cityname:String) { 
                    getCurrentWeather(cityName: $cityname) {
                     main { 
                       temp_c
                     }
                     name
                     id
                   }
                 }`,
                variables: { city }
            })
        })
            .then(response => response.json())
            .then(data => {
                this.setWeather(data);
            })
    };

    setWeather = (data) => {
        this.weatherData = data;
    };
}


decorate(Store, {
    weatherData: observable,
    loadWeather: action.bound,
    setWeather: action
})

export const WeatherStore = new Store();


