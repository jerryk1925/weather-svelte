<script>
    import SvgIcon from 'src/components/SvgIcon';
    import css from './WeatherCityItem.css';

    export let temp;
    export let city;
    export let country;
    export let icon;
    export let humidity;
    export let windSpeed;
    export let windPosition;


</script>

<div class="{css.wrapper}">
    <div class="{css.info}">
        <div class="{css.icon}">
            <SvgIcon id="{icon}"/>
        </div>
        <div class="{css.temp}">
            {temp}
            <span class="{css.cels}">°C</span>
        </div>
        <div class="{css.cityWrapper}">
            <div class="{css.city}">{city}</div>
            <div class="{css.country}">{country}</div>
        </div>
    </div>
    <div class="{css.attributes}">
        <div class="{css.attribute}">Humidity {humidity}</div>
        <div class="{css.windPosition}">{windPosition}</div>
        <div class="{css.windSpeed}">{windSpeed}km/h</div>
    </div>
</div>
