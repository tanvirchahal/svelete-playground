<script>
	import Child from './Child.svelte'
	import Counter from './Counter.svelte'
	import Counter2 from './Counter2.svelte'
	import Props from './Props.svelte'

	let name = 'Svelte';
	let htmlString = '<strong>Something</strong> strong'

	const person = {
		name: 'Tanvir',
		age: 999,
		profession: 'Software'
	}
</script>

<h1>Testing {name}!</h1>


<p>{@html htmlString}</p>
<Child />

<h3>Counter</h3>
<Counter />
<Counter2 />
<Props {...person}  age= {42000}/>

<style>
	h1 {
		font-size:1em;
	}
</style>