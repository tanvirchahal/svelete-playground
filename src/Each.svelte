<script>
import { each } from "svelte/internal";


    const user = [{
        id: 1,
        name: 'Jessica'
    }, {
        id: 2,
        name: 'James'
    }, {
        id: 3,
        name: 'Larry'
    }]
</script>


<ul>
    {#each user as { id,name }, i}
    <li>{id} - {name}</li>
    {/each}
</ul>