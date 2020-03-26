<script>
    import { WEATHER_DAYS} from 'src/config'
    import ForecastDay from 'src/components/ForecastDay';
    import css from './Forecast.css'

    const days = WEATHER_DAYS;

</script>

<div>
    <div class="{css.wrapper}">
        <span class="{css.subTitle}">3 Days</span>
        <span class="{css.title}">Forecast</span>
    </div>
    {#each days as day (day.id)}
        <ForecastDay {...day} />
    {/each}
</div>
