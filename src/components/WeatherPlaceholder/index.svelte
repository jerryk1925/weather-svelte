<script>
    import css from './WeatherPlaceholder.css'

    import { weatherCity } from 'src/store/city';

    let count = 0;
    const qwe = () => {
        const id = $weatherCity.length + 1;
        const city = {
            id
        };
        weatherCity.addNewCity(city);
        console.log($weatherCity);
    }


</script>


<div class="{css.wrapper}">
    <div>
        <button class="{css.button}" on:click={qwe}>
            Add Locations
        </button>
    </div>
    <div>
        <img src="" alt="">
    </div>
</div>