<script>
    let response = []
    const getRandomNumber = async () => {
        response = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5')
        console.log(response)
    }
</script>
{response}
<button on:click={getRandomNumber}>Get Random Number</button>