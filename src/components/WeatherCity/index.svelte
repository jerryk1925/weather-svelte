<script>
    import WeatherPlaceholder from 'src/components/WeatherPlaceholder';
    import WeatherCityItem from 'src/components/WeatherCityItem';

    import { weatherCity } from 'src/store/city';
</script>

<div>
    {#each $weatherCity as city (city.id)}
        <WeatherCityItem {...city} />
    {/each}
    <WeatherPlaceholder />
</div>