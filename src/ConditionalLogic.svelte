<script>
    let loggedin = false;
    let x = 7;

    const toggle = () => {
        loggedin = !loggedin
    }
</script>

{#if loggedin}
    <p>Logged In</p>
{:else}
    <p>Sign In</p>
{/if}

<button on:click={toggle}>Toggle Signin</button>



{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}