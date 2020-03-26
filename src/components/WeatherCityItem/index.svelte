<script>
    import SvgIcon from 'src/components/SvgIcon';

    export let id;
    export let name;
    export let icon;
</script>

<div>
    <div>
        <div>
            <SvgIcon id="{icon}"/>
        </div>
    </div>
    <div>
        <div>{id}</div>
        <div>{name}</div>
        <div></div>
    </div>
</div>
