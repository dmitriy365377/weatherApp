import { observable, computed, configure, action, decorate, runInAction } from 'mobx';
configure({ enforceActions: 'observed' })


class Store {

    weatherData = [];

    addDataToStore(newItem) {
        console.log(newItem)
        this.setWeather(newItem);
    };

    setWeather = (newItem) => {
        return this.weatherData = [
            ...this.weatherData,
            newItem
        ]
    };

}


decorate(Store, {
    weatherData: observable,
    addDataToStore: action.bound,
    setWeather: action
})

export const WeatherStore = new Store();


