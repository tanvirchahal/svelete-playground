<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    const moveUp = () => {
        dispatch('message',{
            age: 27,
            name: 'Tanvir'
        })
    }
</script>

<button on:click={moveUp}>Dispatch Action</button>