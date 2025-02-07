<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/todo">todo</a>
</nav>

{@render children()}
