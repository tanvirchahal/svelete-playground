<script>

    let response = ''
    let loading = true
    const getCars = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const cars = await data.json()
        return cars
    }

    getCars().then(data => {
        response = data
        loading = false;
    })
    
</script>

{#if loading}
 loading......
{/if}
{#if response.length > 1}
<h1>List of Cars</h1>
<p>List of Cars: </p>
<ul>
    {#each response as car}
        <li>{car.name}</li>
    {/each}
</ul>
{/if}