class Store {
    city = [

    ]

    setCity() {

    }
}

Store = decorate(Store, {
    city: observable,
    setCIty: action
});

export const cityStore = new Store();