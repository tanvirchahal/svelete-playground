<script>
    import { count } from '../Store/Store'

    const incrementHandler = () => {
        count.update(value => value+1)
    }
</script>

<button on:click={incrementHandler}>+</button>