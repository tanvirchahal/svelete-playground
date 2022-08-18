<script>
	import { count } from '../Store/Store.js';

	function reset() {
		count.set(0);
	}
</script>

<button on:click={reset}>
	reset
</button>