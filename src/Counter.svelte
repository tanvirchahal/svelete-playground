<script>
    let count = 0


    //Reactive statement 

    $:count > 10 ? alert('Oops this is too high') : ''

    const handleClick = () => {
        count += 1
    }
</script>

<button on:click={handleClick}>Tick</button>
<p>Count: { count } { count < 1 ? 'Time' : 'Times' }</p>
