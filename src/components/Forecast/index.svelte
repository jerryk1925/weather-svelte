<script>
    import { WEATHER_DAYS} from 'src/config'
    import ForecastDay from 'src/components/ForecastDay';
    import css from './Forecast.css'

    let days = WEATHER_DAYS;

</script>

<div class="{css.wrapper}">
    <div>
        Forecast
    </div>
    {#each days as day (day.id)}
        <ForecastDay {...day} />
    {/each}
</div>
