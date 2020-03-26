import { writable } from 'svelte/store';

const createWeatherCity = () => {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        setWeatherCity: (arr) => set(arr),
        addNewCity: (city) => update( n => [...n, city])
    }
};

export const weatherCity = createWeatherCity();