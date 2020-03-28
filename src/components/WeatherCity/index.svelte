<script>
    import { onMount } from 'svelte';
    import WeatherPlaceholder from 'src/components/WeatherPlaceholder';
    import WeatherCityItem from 'src/components/WeatherCityItem';
    import { weatherCity } from 'src/store/city';
    import { WEATHER_CITY } from 'src/config';

    onMount(() => {
        weatherCity.setWeatherCity(WEATHER_CITY);
    })
</script>

<div>
    {#each $weatherCity as city (city.id)}
        <WeatherCityItem {...city} />
    {/each}
    <WeatherPlaceholder />
</div>