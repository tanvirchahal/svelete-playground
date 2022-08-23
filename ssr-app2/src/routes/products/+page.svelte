<script context="module">
	export const load = async ({ fetch }) => {
		const url = `https://jsonplaceholder.typicode.com/posts/1`;
		const res = await fetch(url);
		const data = await res.json();
		return {
			props: {
				post: data
			}
		};
	};
</script>

<script>
	export let post;
</script>

<h1>{post.title}</h1>
<p>{post.body}</p>
