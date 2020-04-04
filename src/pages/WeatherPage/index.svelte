<script>
import WeatherPageDesktop from './views/WeatherPageDesktop';
import WeatherPagePortable from './views/WeatherPagePortable';
import { isPortable } from 'src/lib/isPortable'
const portable = isPortable()
</script>


{#if portable}
    <WeatherPagePortable />
{:else}
    <WeatherPageDesktop />

{/if}


