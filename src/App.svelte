<script>
	import Child from './Child.svelte'
	let name = 'Svelte';
	let htmlString = '<strong>Something</strong> strong'
</script>

<h1>Testing {name}!</h1>


<p>{@html htmlString}</p>
<Child />

<style>
	h1 {
		font-size:1em;
	}
</style>