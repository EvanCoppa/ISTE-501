<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/admin/dash">admin dash</a>

</nav>

{@render children()}