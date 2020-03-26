<script>
    export let day;
    export let precipitation;
    export let minTemp;
    export let maxTemp;
    export let icon;

    import SvgIcon from 'src/components/SvgIcon';
    import css from './ForecastDay.css'

</script>

<div class="{css.wrapper}">
    <div class="{css.info}">
        <div class="{css.imgWrapper}">
            <SvgIcon id="{icon}"/>
        </div>
        <div>
            <div class="{css.day}">{day}</div>
            <div class="{css.precipitation}">{precipitation}</div>
        </div>
    </div>
    <div class="{css.temperature}">
       <div>{`${maxTemp} / ${minTemp}`}</div>
    </div>
</div>
