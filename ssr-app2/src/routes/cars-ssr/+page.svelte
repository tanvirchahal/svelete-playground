<script context="module">
    export async function load({fetch}) {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const cars = await data.json()
        return {
            props: {
                cars
            }
        }
    }
</script>
<script>
    export let cars
    export let title;
</script>
{ cars }
{ title }
<!-- <p>List of Cars: </p>
<ul>
    {#each cars as car}
        <li>{car.name}</li>
    {/each}
</ul> -->