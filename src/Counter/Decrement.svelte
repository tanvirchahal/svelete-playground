<script>
    import { count } from '../Store/Store'

    const decrementHandler = () => {
        count.update(value => value-1)
    }
</script>

<button on:click={decrementHandler}>-</button>