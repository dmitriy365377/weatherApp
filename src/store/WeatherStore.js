import { observable, computed, configure, action, decorate, runInAction } from 'mobx';
import { graphql } from '../lib/gql';
import GET_CURRENT_WEATHER from '../queries/getCurrentWeather';
configure({ enforceActions: 'observed' })

class Store {

    weatherData = [];
    loading = false;
    error = null;


    async loadWeather(cityname) {

        runInAction(() => {
            this.loading = true;
        });

        const { data, error } = await graphql(GET_CURRENT_WEATHER, { cityname });
        console.log(data)
        if (data && data.getCurrentWeather && !error) {

            const objData = {
                temp: data.getCurrentWeather.main.temp_c,
                city: data.getCurrentWeather.name,
                id: data.getCurrentWeather.id,
                wind: data.getCurrentWeather.wind
            }

            const index = this.weatherData.findIndex((el) => (el.id === objData.id));

            runInAction(() => {
                index === -1 ? this.weatherData.push(objData) : this.weatherData[index] = objData;
            });
        }

        runInAction(() => {
            this.loading = false;
        });

    };

    deleteWeather(deleteId) {
        this.weatherData = this.weatherData.filter(({ id }) => id !== deleteId);
    };

}

decorate(Store, {
    weatherData: observable,
    loading: observable,
    loadWeather: action.bound,
    deleteWeather: action.bound
});

export const WeatherStore = new Store();

